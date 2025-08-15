const Task = require("../task.schema.js");
const { matchedData } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const errorLogger = require("../../helpers/errorLogger.helper.js");


async function updateTaskProvider (req, res) {
const validatedData = matchedData(req);

try {   
    
    const task = await Task.findById(req.body["_id"]);

    task.title = req.body.title ||task.title;
    task.description = validatedData.description;
    task.dueDate = validatedData.dueDate;
    task.status = validatedData.status;
    task.priority = validatedData.priority;
 return await task.save();
} catch (error) {}
}

module.exports = updateTaskProvider;
