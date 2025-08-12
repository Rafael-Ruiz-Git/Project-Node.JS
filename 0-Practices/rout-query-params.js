const express = require("express");
const app = express();
const port = 3001; // 0 - 65,535 http://localhost:3001/ to restart is cntrl + c in console 


app.get("/users/:role/", (req, res)=> {
  console.log("Request Method:", req.params);
  console.log("Request query:", req.query);
  res.send("Hello!");
});

app.get("/tasks/:users?", (req, res)=> {
  console.log("Request Method:", req.params);
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
