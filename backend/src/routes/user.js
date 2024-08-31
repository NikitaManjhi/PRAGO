const router=require("express").Router();
const {verifyToken} = require("../middlewares/auth");
const User = require("../models/user.models")
// update login credentials
router.put("/:id",verifyToken,async (req,res)=>{
    const userId=req.userId;

    // find the user in the database
    const user=await User.findOne({

    })
    
})
module.exports=router;