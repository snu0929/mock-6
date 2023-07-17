// board.controller.js

const Board = require("../models/board.model");

// Get all boards
exports.getAllBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch boards" });
  }
};

// Create a new board
exports.createBoard = async (req, res) => {
  try {
    const { name, tasks } = req.body;
    const board = await Board.create({ name, tasks });
    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({ error: "Failed to create board" });
  }
};

// Get a board by ID
exports.getBoardById = async (req, res) => {
  try {
    const { id } = req.params;
    const board = await Board.findById(id);
    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }
    res.status(200).json(board);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch board" });
  }
};

// Update a board
exports.updateBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const board = await Board.findByIdAndUpdate(id, { name }, { new: true });
    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }
    res.status(200).json(board);
  } catch (error) {
    res.status(500).json({ error: "Failed to update board" });
  }
};

// Delete a board
exports.deleteBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const board = await Board.findByIdAndDelete(id);
    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }
    res.status(200).json({ message: "Board deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete board" });
  }
};
