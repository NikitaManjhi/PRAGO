const router = require("express").Router();
const z=require("zod");
const User = require("../models/user.models");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv=require("dotenv");
dotenv.config();
const JWT_SECRET=process.env.JWT_SECRET;

// sign up
const userSchema=z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  isAdmin: z.boolean().optional()
});


router.post("/signup", async (req,res)=>{
  const {success,error}=userSchema.safeParse(req.body);
  if(!success){
    res.status(400).send({
      msg: error.format()
    })
  }

  // check if user's email already exist
  const emailAreadyExists= await User.findOne({
    email: req.body.email
  })

  

  if(emailAreadyExists){
    return res.status(400).send({
      msg: "Email is already registered"
    })
  }


  const user=req.body;
  const newUser=await User.create({
    username: user.username,
    email: user.email,
    password: user.password,
    isAdmin: user.isAdmin || false
  })

  newUser.save()
  .then(()=>{
    const payload = {
      userId: newUser._id,
      isAdmin: newUser.isAdmin
    }
  
    const token = jwt.sign(payload,JWT_SECRET, {expiresIn: "3d"})
    return res.status(200).send({
      "msg": "user Registered",
      "jwt": token
    })
  })

  
})

// sign in
const signinSchema=z.object({
  email: z.string().email(),
  password: z.string().min(6)
})


router.post("/signin", async (req,res)=>{
  const {success,error}=signinSchema.safeParse(req.body);
  if(!success){
    res.status(400).send({
      msg: error.format()
    })
  }

  // check if user exists or not
  const email = await User.findOne({ email: req.body.email });
  if (email == null) {
    return res.status(404).send({
      msg: "email not found",
    });
  } else {
    if (await email.validatePassword(req.body.password)) {
      const token = jwt.sign(
        {
          userId: email._id,
          isAdmin: email.isAdmin
        },
        JWT_SECRET
      );
      return res.status(200).send({
        msg: "Logged in successfully",
        jwt: token,
      });
    } else {
      res.status(400).send({
        msg: "Incorrect password",
      });
    }
  }


})


module.exports=router;