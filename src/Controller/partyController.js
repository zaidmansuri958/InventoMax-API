const partyModel=require("../Model/Party");

const createParty=async function(req,res){
    const{party_name,mobile_no,receive_opening_bal,pay_opening_bal,GST,billing_address,pin_code,state}=req.body;
    const newParty=new partyModel({
        party_name:party_name,
        mobile_no:mobile_no,
        receive_opening_bal:receive_opening_bal,
        pay_opening_bal:pay_opening_bal,
        GST:GST,
        billing_address:billing_address,
        pin_code:pin_code,
        state:state,
        userID: req.userID
    });
    try{
        await newParty.save();
        res.status(201).json(newParty)
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}



const deleteParty = async function (req, res) {
    const id = req.params.id;
    try {
        const item=await partyModel.findByIdAndRemove(id);
        res.status(202).json(item)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
}

const getParty= async function (req, res) {
    try {
        const items = await partyModel.find({ userID: req.userID })
        res.status(200).json(items)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }

}

module.exports = { createParty, deleteParty, getParty }