const mongoose=require("mongoose");

const itemSchema=mongoose.Schema({
    item_name:{
        type:String,
        required:true
    },
    purchase_price:{
        type:String,
        required:true
    },
    selling_price:{
        type:String,
        required:true
    },
    unit:{
        type:String,
        required:true
    },
    current_stock:{
        type:String,
        required:true
    },
    low_stock:{
        type:String,
        required:true
    },
    category:{
        type:String,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
})

module.exports=mongoose.model("items",itemSchema);