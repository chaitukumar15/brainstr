var express = require("express");

var fs= require("fs");

var cors=require("cors")


var app = express();

app.use(cors())


const { json } = require("stream/consumers");




app.get("/products",(req,res)=>{


    fs.readFile("./index.json","utf-8",(err,data)=>{

        if(err){

            res.send({
                msg:err.message,
                status:400
            })
        }else{
            res.send({
                msg:"successfully sent",
                status:200,
                data:JSON.parse(data)
            })

        }

    })


})




app.get("/",(req,res)=>{

    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
 <center>   <h1 style="color: red;">hi this is root page</h1></center>
</body>
</html>`)
})

app.listen(4000,()=>{
    console.log("hi server is running");
    
})