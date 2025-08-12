const { ta } = require("date-fns/locale");
const express = require("express");

const tasksRouter= express.Router();


tasksRouter.get("/tasks", (req,res)=> res.send("All Tasks"));

tasksRouter.post("/tasks", (req,res)=> res.send("Creating a new Task"));

module.exports = tasksRouter;
