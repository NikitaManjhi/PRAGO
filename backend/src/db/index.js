//  database connection
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const {DB_NAME}=require("../constant")
dotenv.config();
const connectDB = async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
        return console.log(`\n MongoDB Connection Successful! DB host ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MongoDB Connection Error\n", error);
    }
}

module.exports={
    connectDB
}