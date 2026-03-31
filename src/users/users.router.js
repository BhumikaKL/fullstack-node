const express= require("express");
const userController=require("./users.controller.js");
const usersrRouter=express.Router();

usersrRouter.post("/create", userController.handleCreatUser);

module.exports=usersrRouter;

