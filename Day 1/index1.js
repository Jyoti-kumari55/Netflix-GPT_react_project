// var express = require("express");
// const app = express();

// app.use((req, res, next) => {
//     let body = "";
//     req.on("end", () =>{
//         const username = body.split('=')[1];
//         if(username){
//             req.body = {name: username};
//         }
//         next();
//     });
//     req.on("data", chunk => {
//         body += chunk;
//     })
// });
// app.use((req, res, next) => {
//     if(req.body){
//         return res.send("<h1>" + req.body.name + "</h1>")

//     }
//     res.send('<form method="POST"><input type="text" name="username"><button type="submit">Create User </button></form>')
// });
// app.listen(4400);

 // ********** The above code can be done by using body parser module (with this we dont need to parse the extre code )

 var express = require("express");
 var bodyParser = require("body-parser");
 var app = express();

 app.use(bodyParser.urlencoded({ extended: false }))

 app.post("/users", (req, res, next) => {
    res.send("<h1>Users: " + req.body.username + "</h1>")

 });

 app.get("/", (req, res, next) => {
      res.send('<form action="/users" method="POST"><input type="text" name="username"><button type="submit">Create User </button></form>')

 });

 app.listen(4000);
