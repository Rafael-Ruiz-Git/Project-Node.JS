const express = require("express");
const app = express();
const port = 3001; // 0 - 65,535 http://localhost:3001/ to restart is cntrl + c in console 


app.get("/some.text", (req, res)=> {
  console.log("Request urk:", req.url);
  res.send("Hello!");
});

app.get("/posts?", (req, res)=> {
  console.log("Request urk:", req.url);
  res.send("Hello!");
});

app.get("/tag*", (req, res)=> {
  console.log("Request urk:", req.url);
  res.send("Hello!");
});

app.get("/error/*", (req, res)=> {
  console.log("Request urk:", req.url);
  res.send("Hello!");
});

app.get(/.*fly$/, (req, res) => {
  console.log("Request Method", req.url);
  res.send("Hello World");
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
