const express = require("express");
const authController = require("./auth.controller.js");
const { StatusCodes } = require("http-status-codes");
const loginValidator =require("./validators/login.validator.js");
const {validationResult} = require("express-validator");

const authRouter = express.Router();

/**
 * @swagger
 * 
 * /auth/login:
 *  post:
 *    summary: User login
 *    tags: [Atuthentication]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Login'
 *    responses:
 *      200:
 *        description: User Login successfully
 *        content:
 *          application/json:
 *            example:
 *              status: success
 *              statusCode: 200
 *              message: Ok
 *              data: 
 *                accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2OGEzNGI3OGM4MDhhNTVhZjQyMjBkYTAiLCJlbWFpbCI6ImFsZXhAcnVpei5jb20iLCJpYXQiOjE3NTU1NDM5MjcsImV4cCI6MTc1NTYzMDMyN30.mDoy1PLZYzuBzgois8d53dpIejlQSbOFpXhN_SENAYg
 */
authRouter.post("/login", loginValidator,(req, res)=>{
    const result = validationResult(req);

    if (result.isEmpty()) {
      return authController.handleLogin(req, res);
    } else {
      res.status(StatusCodes.BAD_REQUEST).json(result.array());
    }
});

module.exports = authRouter;


/**
 * @swagger 
 * 
 * components: 
 *  schemas:
 *    Login:
 *      type: object
 *      required: 
 *        - email
 *        - password
 *      properties: 
 *        email:
 *          type: string
 *          description: valid email address
 *        password:
 *          type: string
 *          description: Must contain at least 8 characters and also a number, capital letter and a special character
 *      example:
 *        email: alex@ruiz.com
 *        password: Password123#
* */

