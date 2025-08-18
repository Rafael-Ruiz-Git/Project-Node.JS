const express = require("express");
const tasksController = require("./tasks.controller.js");
const { StatusCodes } = require("http-status-codes");
const { validationResult } = require("express-validator");
const createTaskValidator = require("./validators/createTask.validator.js");
const getTasksValidator = require("./validators/getTask.validator.js");
const updateTasksValidator = require("./validators/updateTask.validator.js");
const deleteTasksValidator = require("./validators/deleteTask.validator.js");
const authenticateToken = require("../middleware/authenticateToken.middleware.js");

/*Fire the router function*/
const tasksRouter = express.Router();

// Get All Tasks
tasksRouter.get("/tasks", [getTasksValidator, authenticateToken], (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return tasksController.handleGetTasks(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});


tasksRouter.post("/tasks", [createTaskValidator,authenticateToken], (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return tasksController.handlePostTasks(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});


tasksRouter.patch("/tasks", [updateTasksValidator, authenticateToken],(req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return tasksController.handlePatchTasks(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});


tasksRouter.delete("/tasks", [deleteTasksValidator, authenticateToken],(req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return tasksController.handleDeleteTasks(req, res);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json(result.array());
  }
});


module.exports = tasksRouter;