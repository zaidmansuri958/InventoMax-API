const express=require("express");
const itemRouter=express.Router();
const auth=require("../MiddleWare/auth");
const { createItem, deleteItem, getItems }=require("../Controller/itemController");

itemRouter.post("/",auth,createItem);
itemRouter.get("/",auth,getItems);
itemRouter.delete("/:id",auth,deleteItem)

module.exports=itemRouter;