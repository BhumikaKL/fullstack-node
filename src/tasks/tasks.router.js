const express = require("express");//importing express 
const taskController = require("./tasks.controller.js");

const tasksRouter = express.Router();//express object imported and invoked the router method 

// Routes
tasksRouter.get("/tasks",(req,res)=>  {
    return res.send("Hello World");
});//Create route call task , call back function 

tasksRouter.post("/tasks",(req,res)=> {
    console.log(req.body);
    return res.send("Create a new Task")});

module.exports = tasksRouter;//exporting task router 