// subtask.controller.js

const Subtask = require("../models/subtask.model");

// Get all subtasks
exports.getAllSubtasks = async (req, res) => {
  try {
    const subtasks = await Subtask.find();
    res.status(200).json(subtasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch subtasks" });
  }
};

// Create a new subtask
exports.createSubtask = async (req, res) => {
  try {
    const { title, isCompleted } = req.body;
    const subtask = new Subtask({ title, isCompleted });
    await subtask.save();
    res.status(201).json(subtask);
  } catch (error) {
    res.status(500).json({ error: "Failed to create subtask" });
  }
};

// Get a subtask by ID
exports.getSubtaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const subtask = await Subtask.findById(id);
    if (!subtask) {
      return res.status(404).json({ error: "Subtask not found" });
    }
    res.status(200).json(subtask);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch subtask" });
  }
};

// Update a subtask
exports.updateSubtask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, isCompleted } = req.body;
    const subtask = await Subtask.findByIdAndUpdate(
      id,
      { title, isCompleted },
      { new: true }
    );
    if (!subtask) {
      return res.status(404).json({ error: "Subtask not found" });
    }
    res.status(200).json(subtask);
  } catch (error) {
    res.status(500).json({ error: "Failed to update subtask" });
  }
};

// Delete a subtask
exports.deleteSubtask = async (req, res) => {
  try {
    const { id } = req.params;
    const subtask = await Subtask.findByIdAndDelete(id);
    if (!subtask) {
      return res.status(404).json({ error: "Subtask not found" });
    }
    res.status(200).json({ message: "Subtask deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete subtask" });
  }
};
