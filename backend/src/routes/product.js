const router=require("express").Router();
const bcrypt = require("bcrypt")
const {verifyTokenandAuthorize,verifyTokenAndAdmin} = require("../middlewares/auth");
const Product = require("../models/product.models")



// Create Product 
router.post("/",verifyTokenAndAdmin,async (req,res)=>{
    const newProduct= new Product(req.body);

    try{
        const savedProduct =await newProduct.save();
        res.status(200).json(savedProduct);
    }
    catch(err){
        res.status(500).json(err);
    }
})


// update product details
router.put("/:id",verifyTokenAndAdmin, async (req,res)=>{

//   update the product information based on req.body
  try{
    const updatedProduct=await Product.findByIdAndUpdate(req.params.id,
        {
            $set: req.body,
        },
        {new : true}
    );
    res.status(200).json(updatedProduct);
  } catch (err){
    res.status(500).json(err);
  }
})

// Delete Product
router.delete("/:id",verifyTokenAndAdmin, async (req,res)=>{
  try{
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted successfully");
  }
  catch(err){
    res.status(500).json(err);
  }
})

// Get single Product
router.get("/find/:id", async (req,res)=>{
  try{
    const product=await Product.findById(req.params.id);
  
    res.status(200).json(product);
  }
  catch(err){
    res.status(500).json(err);
  }
})

// Get All Products
router.get("/", async (req,res)=>{
  const qNew = req.query.new;
  const qCategory = req.query.category;
  
  try{
    let products;
    if(qNew){
        products = await Product.find().sort({createdAt:-1}).limit(20);
    }
    else if(qCategory){
        products = await Product.find({
            categories: {
                $in:[qCategory],
            }
        });
    }
    else{
        products = await Product.find().limit(20);
    }

    res.status(200).json(products);
  }
  catch(err){
    res.status(500).json(err);
  }
})

module.exports=router;