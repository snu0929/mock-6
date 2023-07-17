const express = require("express");
const subTaskRouter = express.Router();

// Import the necessary controllers

const subtaskController = require("../controllers/subtask.controller");

// Subtask routes
subTaskRouter.get("/subtasks", subtaskController.getAllSubtasks);
subTaskRouter.post("/subtasks", subtaskController.createSubtask);
subTaskRouter.get("/subtasks/:id", subtaskController.getSubtaskById);
subTaskRouter.put("/subtasks/:id", subtaskController.updateSubtask);
subTaskRouter.delete("/subtasks/:id", subtaskController.deleteSubtask);

module.exports = {
  subTaskRouter,
};
