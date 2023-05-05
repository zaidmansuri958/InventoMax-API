require("dotenv").config();
const express=require("express");
const app=express();
const mongoose=require("mongoose");

const userRouter=require("./Routes/userRoutes");
const itemRouter=require("./Routes/itemRoutes");
const partyRouter=require("./Routes/partyRoutes");
const categoryRouter=require("./Routes/categoryRoutes");

app.use(express.json())
app.use("/user",userRouter);
app.use("/item",itemRouter);
app.use("/party",partyRouter);
app.use("/category",categoryRouter);

const PORT=process.port || 3000

mongoose.connect(process.env.DB).then(function(){
    app.listen(PORT,function(){
        console.log("Listning on port "+ PORT)
    });
}).catch(function(error){
    console.log(error)
});

app.get("/",function(req,res){
    res.send("working")
});


