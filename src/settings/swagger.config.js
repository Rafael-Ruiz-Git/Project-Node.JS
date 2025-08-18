const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition:{
    openapi: "3.1.0",
    info: {
      title: "Task Manager API",
      version: "0.1.0",
      description: "API made with Express and documented using Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Alex",
        url: "https://www.linkedin.com/in/rafael-ruiz-data-life/",
        email: "alex@ruiz.com"
      },
    },
    servers: [
      {
        url:"http://localhost:3001/",
      }
    ]
    },
    apis: [path.join(__dirname, "..", "**/*.js")],
};

const specs = swaggerJsdoc(options);

module.exports = specs;