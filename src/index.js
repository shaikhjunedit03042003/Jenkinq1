const express=require("express");

const PORT=4000;

const app=express();


app.get("/",(req,res)=>{

    return res.send("Hello juneddd");
});

app.listen(PORT,()=>{
    console.log(`Server Running http://localhost:$+PORT`);
});