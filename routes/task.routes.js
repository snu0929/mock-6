const express = require("express");
const taskRouter = express.Router();

// Import the necessary controllers and models
const taskController = require("../controllers/task.controller");

// Define the task routes
taskRouter.post("/tasks", taskController.createTask);
taskRouter.put("/tasks/:id", taskController.updateTask);
taskRouter.delete("/tasks/:id", taskController.deleteTask);

module.exports = {
  taskRouter,
};
