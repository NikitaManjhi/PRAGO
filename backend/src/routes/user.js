const router=require("express").Router();
const bcrypt = require("bcrypt")
const {verifyTokenandAuthorize,verifyTokenAndAdmin} = require("../middlewares/auth");
const User = require("../models/user.models")

const hash = (password) => {
    const saltRounds=10;
    bcrypt.hash(password,saltRounds)
    .then((hash)=>{
        return hash;
    })
    .catch(err=>console.log(err));
}



// update login credentials
router.put("/:id",verifyTokenandAuthorize, async (req,res)=>{
    // hash the password of user if they are updating their password
  if(req.body.password){
    req.body.password=hash(req.body.password);
    console.log(req.body.password);
  }

//   update the user information based on req.body
  try{
    const updatedUser=await User.findByIdAndUpdate(req.params.id,
        {
            $set: req.body,
        },
        {new : true}
    );
    res.status(200).json(updatedUser);
  } catch (err){
    res.status(500).json(err);
  }
})

// Delete account of user
router.delete("/:id",verifyTokenandAuthorize, async (req,res)=>{
  try{
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user deleted successfully");
  }
  catch(err){
    res.status(500).json(err);
  }
})

// Get User (Only Admin can get user)
router.get("/find/:id",verifyTokenAndAdmin, async (req,res)=>{
  try{
    const user=await User.findById(req.params.id);
    const {password,...others}=user._doc;
    res.status(200).json(others);
  }
  catch(err){
    res.status(500).json(err);
  }
})

// Get All Users
router.get("/",verifyTokenAndAdmin, async (req,res)=>{
  const query = req.query.new;
  
  try{
    const user=query?await User.find().sort({_id:-1}).limit(5):await User.find();
    res.status(200).json(user);
  }
  catch(err){
    res.status(500).json(err);
  }
})

// Get User Stats
router.get("/stats",verifyTokenAndAdmin, async (req,res) => {
  const date=new Date();
  const lastyear = new Date(date.setFullYear(date.getFullYear()-1));

  try{
    const data = await User.aggregate([
      { $match : { createdAt: { $gte: lastyear}}},
      {
        $project : {
          month : { $month: "$createdAt"},
        },
      },
      {
        $group: {
          _id : "$month",
          total : {$sum : 1},
        }
      }
    ]);
    return res.status(200).json(data);
  }
  catch(err){
    return res.status(500).json(err);
  }

})
module.exports=router;