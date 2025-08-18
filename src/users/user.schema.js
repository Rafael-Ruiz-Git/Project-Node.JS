const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
    maxLength: [100, "First name cannot be more than 100 characters"],
      },
  lastName: {
    type: String,
    required: false,
    trim: true,
    maxLength: [100, "Last name cannot be more than 100 characters"],
  },
email: {
  type: String,
  required: [true,"Email is required"],
  trim: true,
  unique: true,
  lowercase: true,
  validate: {
    validator: function (email){
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    },
    message: ()=>`Email address is not valid`
  },
},

password: {
  type: String,
  required: [true,"Password is required"],

}
});

const User = model("User", userSchema); 
module.exports = User;

/**
 * @swagger 
 * 
 * components: 
 *  schemas:
 *    User:
 *      type: object
 *      required: 
 *        - firstName
 *        - email
 *        - password
 *      properties: 
 *        firstName:
 *          type: string
 *          description: first name of user
 *          maxLength: 100
 *        lastName:
 *          type: string
 *          description: last name of user
 *          maxLength: 100
 *        email:
 *          type: string
 *          description: valid email address
 *        password:
 *          type: string
 *          description: Must contain at least 8 characters and also a number, capital letter and a special character
 *      example:
 *        firstName: Alex
 *        lastName: Ruiz
 *        email: alex@ruiz.com
 *        password: Password123#
* */