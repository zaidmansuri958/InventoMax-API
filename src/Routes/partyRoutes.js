const express=require("express");
const partyRouter=express.Router();
const auth=require("../MiddleWare/auth");
const { createParty, deleteParty, getParty }=require("../Controller/partyController");

partyRouter.post("/",auth,createParty);
partyRouter.get("/",auth,getParty);
partyRouter.delete("/:id",auth,deleteParty);

module.exports=partyRouter;