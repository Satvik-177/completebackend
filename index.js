require("dotenv").configure()
const express = require("express")  //common js
//import express from "express" //module js

const app = express();
//const port = 4000;

app.get("/",(req,res)=>{

    res.send("Hello everyone")
})

app.get("/youtube",(req,res)=>{

    res.send("<h1>youtube mei apka swagat hai</h1>")
})

app.listen(port,()=>{

    console.log(`Server is created successfully at port ${port}`)
})