const { body } = require("express-validator");

const updateTasksValidator = [
  body("_id", "Valid Document ID needed").notEmpty().isMongoId(),
  body("title", "Title must be string").optional().isString(),
  body("title", "Title legnth up to 100 char").isLength({ 
    max: 100
    }),
  body("dueDate", "The Due Date needs to be valid ISO8601 string").optional().isISO8601(),
  body("description", "The description cannot be empty and needs to be a string").optional().isString().trim(),
  body("description", "The description cannot be more than 500").isLength({max: 500}),
  body("priority").isIn( ["low", "normal", "high"]).optional(),
  body("status").isIn( ["todo", "inProgress", "completed"]).optional()
 ];

module.exports = getTasksValidator;