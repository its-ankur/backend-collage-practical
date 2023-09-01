const express=require("express");
const fs=require("fs");
let a=fs.readFileSync("login.json");
let data=JSON.parse(a);
//console.log(data);
const app=express();
app.use(express.static("."));
app.use(express.urlencoded({extended:true}));
app.post("/postdata",(req,res)=>{
    if(data[0].Username===req.body.Username && data[0].Password===req.body.Password){
        res.send("Welcome to dashboard");
    }
    // console.log(req.body);
    // res.send(req.body +" Invalid Username or Password");
    // //res.send("Invalid Username or Password");
    else{
        res.send("Invalid Username or Password");
    }
});
app.listen(3000,()=>{
    console.log("server is running at port 3000");
});