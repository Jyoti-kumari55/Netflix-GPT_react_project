
   // Fs - File system module (core module), which can read, write, create, delete, rename files
// const fs = require("fs");
// const userName = "Jyoti";

// fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File is Wrote...")
// })

       // Http core module to create a web server
// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log("Incoming Messsge");
//     console.log(req.method, req.url);

//     res.setHeader("Content-Type", "text/html");
//     res.end("<h1>Success</h1>");
// })
// server.listen(4000);

  // Express framework

  const express = require("express");
  const app = express();

  app.use((req, res, next) => {

    res.send('<form method="POST"><input type="text" name="username"><button type="submit">Create User </button></form>');
  })
  app.listen(5000);