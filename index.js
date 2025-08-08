const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) =>{
  if(err) {
    console.log("Error reading the file: ", err);
    return
  }
  console.log("file contains:", data);
});

const content = "Hello World";
fs.writeFile("example.txt", content, (err) => {
  if(err) {
    console.log("Error writing to a file");
    return;
  }
  console.log("Sucessfully");
  console.log(content);
})


fs.rename("example.txt", "new_example.txt", (err) => {
  if (err) {
    console.log("error renamed");
    return;
  }
  console.log("File renamed successfully")
});

// console.log(fs);