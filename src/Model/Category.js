const mongoose=require("mongoose");

const categorySchema=mongoose.Schema({
    category_name:{
        type:String,
        required:true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
});

module.exports=mongoose.model("categories",categorySchema);