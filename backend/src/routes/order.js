const router=require("express").Router();
const {verifyTokenandAuthorize,verifyTokenAndAdmin,verifyToken} = require("../middlewares/auth");
const Order = require("../models/orders.models")



// Create  
router.post("/",verifyToken,async (req,res)=>{
    const newOrder= new Order(req.body);

    try{
        const savedOrder =await newOrder.save();
        res.status(200).json(savedOrder);
    }
    catch(err){
        res.status(500).json(err);
    }
})


// update Order 
router.put("/:id",verifyTokenAndAdmin, async (req,res)=>{

//   update the Order information based on req.body
  try{
    const updatedOrder=await Order.findByIdAndUpdate(req.params.id,
        {
            $set: req.body,
        },
        {new : true}
    );
    res.status(200).json(updatedOrder);
  } catch (err){
    res.status(500).json(err);
  }
})

// Delete Order
router.delete("/:id",verifyTokenAndAdmin, async (req,res)=>{
  try{
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order deleted successfully");
  }
  catch(err){
    res.status(500).json(err);
  }
})

// Get User Order
router.get("/find/:userId",verifyTokenandAuthorize ,async (req,res)=>{
  try{
    const orders=await Order.find({userId: req.params.userId});
  
    res.status(200).json(orders);
  }
  catch(err){
    res.status(500).json(err);
  }
})

// Get All Orders
router.get("/",verifyTokenAndAdmin, async (req,res)=>{
 
  try{
   
    orders = await Order.find().limit(20);


    res.status(200).json(orders);
  }
  catch(err){
    res.status(500).json(err);
  }
})

// Stats
router.get("/income", verifyTokenAndAdmin, async (req,res) =>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const previousMonth = new Date(lastMonth.setMonth(lastMonth.getMonth()-1));

    try{
        const income = Order.aggregate([
            { $match: { createdAt: {$gte:previousMonth}}},
            {
                $project: {
                    month : {$month: "$createdAt"},
                    sales: "$amount"
                },
                
                $group:{
                    id: "month",
                    total: {$sum : "sales"},
                }
                
            },
        ]);
        res.status(200).send(income);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;