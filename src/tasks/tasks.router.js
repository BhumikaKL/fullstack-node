const express = require("express");
const taskController = require("./tasks.controller.js");

const tasksRouter = express.Router();

// Routes
tasksRouter.get("/", taskController.handleGetTasks);
tasksRouter.post("/", taskController.handlePostTasks);
tasksRouter.patch("/", taskController.handlePatchTasks);
tasksRouter.delete("/", taskController.handleDeleteTasks);

module.exports = tasksRouter;