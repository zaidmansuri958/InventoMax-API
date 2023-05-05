const express=require("express");
const categoryRouter=express.Router();
const auth=require("../MiddleWare/auth");
const {createCategory, deleteCategory, getCategory }=require("../Controller/categoryController");

categoryRouter.post("/",auth,createCategory);
categoryRouter.get("/",auth,getCategory);
categoryRouter.delete("/:id",auth,deleteCategory);

module.exports=categoryRouter;