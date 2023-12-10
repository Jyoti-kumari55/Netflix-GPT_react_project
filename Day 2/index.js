const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root123",
    database: "cities",
    multipleStatements: true
});

app.use(bodyParser.json());

conn.connect((error) => {
    if(error){
        console.log("Connection failed", error)
    }else {
        console.log("Connection has been established!")
    }

});

app.get("/cityy", (req, res) => {
    conn.query("Select * from city" ,(error, rows, fields) => {
        if(error){
            console.log("Error occured !!")
        }else {
            res.send(rows)
        }
    } );
})

app.post("/cityy", (req, res) => {
    let city = req.body;
    console.log(city);

    const id = city.city_id;
    const name = city.city_name;
    const code = city.city_code;
    const famous = city.city_famous_for;

    // var sql = "SET @city_id = ?; SET @city_name = ?; SET @city_code = ?; SET @city_famous_for = ?; CALL cityAddorEdit(@city_id,@city_name,@city_code,@city_famous_for);";
    var sql = "Insert into city values(?, ?, ?, ?)";
    conn.query(sql, [id, name, code, famous], (error, rows, fields) => {
        if(error){
            console.log(error.message);
        }else {
            res.send("New city posted..");
        }
    });
});

app.get("/cityy/:id")

app.listen(4000);