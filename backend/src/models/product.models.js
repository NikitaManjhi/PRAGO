const mongoose=require("mongoose");

const productSchema=new mongoose.Schema(
    {
        title: {type: String, required: true,unique: true },
        desc: {type: String, required: true},
        img: {type: String,required: true},
        categories: {type: Array},
        size: {type: Array},
        color: {type: Array},
        price: {type:Number, required: true},
        stock: {type:Number}
        
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product",productSchema);
module.exports=Product