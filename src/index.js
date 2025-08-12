const express = require("express");
const fs =require("fs");
const path = require("path");
const morgan = require("morgan");
const tasksRouter = require("./tasks/tasks.router.js");
const cors = require("cors");

const app = express();
const port = 3001; // 0 - 65,535 http://localhost:3001/ to restart is cntrl + c in console 

app.use(express.json());

const corsOptions = {
  origin: ["example.com", "example2.com"]
}

app.use(cors());


let accessLogStream = fs.createWriteStream(path.join(__dirname, "..","access.log"), {
  flags: "a",
});

app.use(morgan("combined", {stream: accessLogStream}));

const middleWare = function (req, res, next) {
  req.info = {appname: "Task Manager", author: "Rafael Ruiz"};
  next();
};

app.use(middleWare);

/*Define routs */
app.use("/", tasksRouter);




app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
