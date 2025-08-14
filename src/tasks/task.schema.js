const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: {
    type: String,
    required: [true, "Task title is required"],
    trim: true,
    maxLength: [100, "Title cannot be more than 100 characters"],
      },
  description: {
    type: String,
    required: [true, "Task description is required"],
    trim: true,
    maxLength: [500, "Description cannot be more than 500 characters"],
  },
status: {
  type: String,
  required: [true,"Status description is required"],
  enum: ["todo", "inProgress", "completed"],
  default: "todo"
},
priority: {
  type: String,
  required: [true, "Priority description is required"],
  enum: ["low", "normal", "high"],
  default: "normal"
},

dueDate: {
  type: Date,
  required: [true, "Date description is required"],
},
createdAt: {
  type: Date,
  default: Date.now,
  }, 
},
{ timestamps: true, versionKey: false} 
);

const Task = model("Task", taskSchema); 
module.exports = Task;