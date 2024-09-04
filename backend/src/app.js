const express = require("express");
const cors = require("cors");      
const dotenv = require("dotenv");
const userRouter = require("./routes/user.js");
const authRouter = require("./routes/auth.js");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
// const stripeRoute = require("./routes/stripe");

dotenv.config({
    path: "./.env"
});

const app=express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// common middleware
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true , limit: "16kb"}));
app.use(express.static("public"));


// routes
app.use("/api/user",userRouter);
app.use("/api/auth", authRouter);
app.use("/api/products",productRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

// app.use("/api/checkout", stripeRoute);
module.exports=app