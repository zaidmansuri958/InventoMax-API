const mongoose=require("mongoose");

const partySchema=mongoose.Schema({
    party_name:{
        type:String,
        required:true
    },
    mobile_no:{
        type:String,
        required:true,
    },
    receive_opening_bal:{
        type:String,
        require:true,
    },
    pay_opening_bal:{
        type:String,
        require:true,
    },
    GST:{
        type:String,
    },
    billing_address:{
        type:String,
    },
    pin_code:{
        type:String
    },
    state:{
        type:String
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
},{timeStamps:true});

module.exports=mongoose.model("party",partySchema);