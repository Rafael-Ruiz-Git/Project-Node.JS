const express = require("express");
const tasksRouter = require("./tasks/tasks.router.js");

const app = express();
const port = 3001; // 0 - 65,535 http://localhost:3001/ to restart is cntrl + c in console 

/*Define routs */
app.use("/", tasksRouter);


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
