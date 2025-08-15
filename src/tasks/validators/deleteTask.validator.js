const { body } = require("express-validator");

const deleteTasksValidator = [
  body("_id", "Valid Document ID needed").notEmpty().isMongoId(),
  
 ];

module.exports = deleteTasksValidator;