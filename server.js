const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    if(req.url=="/" || req.url=="/home.html"){
        fs.readFile("home.html","utf-8",(err,data)=>{
            res.end(data);
        });
    }
    else if(req.url=="/about.html"){
        fs.readFile("about.html","utf-8",(err,data)=>{
            res.end(data);
        });
    }
    else if(req.url=="/style.css"){
        fs.readFile("style.css","utf-8",(err,data)=>{
            res.end(data);
        });
    }
    else if(req.url=="/contact.html"){
        fs.readFile("contact.html","utf-8",(err,data)=>{
            res.end(data);
        });
    }
    else{
        res.end("404 error");
    }
});
server.listen(3000);