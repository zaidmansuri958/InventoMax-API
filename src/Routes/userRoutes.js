const express=require("express");
const userRouter=express.Router()
const auth=require("../MiddleWare/auth");
const {signUp}=require("../Controller/userController")

userRouter.post("/signUp",signUp);
// userRouter.post("/signIn",signIn);
// userRouter.get("",auth,getUser);

module.exports=userRouter;