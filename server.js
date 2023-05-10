const express=require("express");
const path=require("path")
const importData=require("./data")

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(3000,(err)=>{
    if(err)
    console.log("Error in starting server..")
    else
    console.log("Server started");
});
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send('Welcome to home page')

})

app.post("/sendData",(req,res)=>{
const {uname,password}=req.body;
console.log(uname);

res.end();

})
app.get("/about",(req,res)=>{
    res.send('About us page'+req.query.name+", "+req.query.age);
})
app.get("/jsonData",(req,res)=>{
    res.json(importData.Products);
})

app.all("*",(req,res)=>{
    res.status(404).send("Page not found");

})
