const express = require("express");
const userController = require("./users.controller.js");
const createUserValidator = require("./validators/createUser.validator.js")
const { StatusCodes } = require("http-status-codes");
const { validationResult } = require("express-validator");

const userRouter = express.Router();

/**
 * @swagger
 * 
 * /users/create:
 *  post:
 *    summary: Create a new user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *        description: User created successfully
 *        content:
 *          application/json:
 *            example:
 *              status: success
 *              statusCode: 201
 *              message: Created
 *              data: 
 *                _id: 68a34b78c808a55af4220da0
 *                firstName: Alex
 *                lastName: Ruiz
 *                email: alex@ruiz.com
 */
userRouter.post("/create", createUserValidator, (req, res) => {
 const result = validationResult(req);
   if (result.isEmpty()) {
     return userController.handleCreateUser(req, res);
   } else {
     res.status(StatusCodes.BAD_REQUEST).json(result.array());
   }
});

module.exports = userRouter;