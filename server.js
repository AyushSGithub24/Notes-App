const express = require('express');
const app=express();
const ejs=require("ejs")
const path=require("path")
const port=3000;
const {noteRoute}=require("./Routes/notes")
app.set('view engine',"ejs")
app.set("views","./views")
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.get("/",(req,res)=>{
    res.render("index")
})
app.use("/notes",noteRoute)
app.listen(port,()=>{
    console.log("Server starting at port "+port);
    console.log(`http://localhost:${port}/`);
})