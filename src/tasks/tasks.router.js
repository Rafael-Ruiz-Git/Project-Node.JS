const { ta } = require("date-fns/locale");
const express = require("express");

const tasksRouter= express.Router();


tasksRouter.get("/tasks", (req,res)=> {
    return res.send("Hello!!");
});

tasksRouter.post("/tasks", (req,res)=> {
  console.log(req.body);
  console.log(typeof req.body);
  return res.send("Create new Taks");
});

module.exports = tasksRouter;
