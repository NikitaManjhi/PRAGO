const app=require("./app");
const dotenv = require("dotenv");
const { connectDB } = require("./db");

dotenv.config({
    path: "./.env"
});

const PORT = process.env.PORT || 3001;


// listen only after db is connected

connectDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch((err)=>{
        console.log("mongoDB connection fail", err);
})


