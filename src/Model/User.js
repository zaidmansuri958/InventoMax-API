const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    businessName:{
        type:String,
        require:true
    },

    city:{
        type:String,
        require:true
    },

    number:{
        type:String,
        requre:true
    }
})

module.exports=mongoose.model("users",userSchema);