const Task = require("../task.schema.js");

async function getTasksProvider(params) {
  return await Task.find();
}

module.exports = getTasksProvider;