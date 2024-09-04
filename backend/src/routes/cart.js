const router=require("express").Router();
const {verifyTokenandAuthorize,verifyTokenAndAdmin,verifyToken} = require("../middlewares/auth");
const Cart = require("../models/cart.models")



// Create  
router.post("/",verifyToken,async (req,res)=>{
    const newCart= new Cart(req.body);

    try{
        const savedCart =await newCart.save();
        res.status(200).json(savedCart);
    }
    catch(err){
        res.status(500).json(err);
    }
})


// update Cart 
router.put("/:id",verifyTokenandAuthorize, async (req,res)=>{

//   update the Cart information based on req.body
  try{
    const updatedCart=await Cart.findByIdAndUpdate(req.params.id,
        {
            $set: req.body,
        },
        {new : true}
    );
    res.status(200).json(updatedCart);
  } catch (err){
    res.status(500).json(err);
  }
})

// Delete Cart
router.delete("/:id",verifyTokenandAuthorize, async (req,res)=>{
  try{
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart deleted successfully");
  }
  catch(err){
    res.status(500).json(err);
  }
})

// Get User Cart
router.get("/find/:userId",verifyTokenandAuthorize ,async (req,res)=>{
  try{
    const Cart=await Cart.findOne({userId: req.params.userId});
  
    res.status(200).json(Cart);
  }
  catch(err){
    res.status(500).json(err);
  }
})

// Get All Carts
router.get("/",verifyTokenAndAdmin, async (req,res)=>{
 
  try{
   
    Carts = await Cart.find().limit(20);


    res.status(200).json(Carts);
  }
  catch(err){
    res.status(500).json(err);
  }
})

module.exports=router;