const express = require("express");
const boardRouter = express.Router();

// Import the necessary controllers and models
const boardController = require("../controllers/board.controller");

// Define the board routes
boardRouter.get("/boards", boardController.getAllBoards);
boardRouter.post("/boards", boardController.createBoard);
boardRouter.get("/boards/:id", boardController.getBoardById);
boardRouter.put("/boards/:id", boardController.updateBoard);
boardRouter.delete("/boards/:id", boardController.deleteBoard);

module.exports = {
  boardRouter,
};
