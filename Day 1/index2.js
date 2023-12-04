const express = require("express");
const bodyParser = require("body-parser");

const placeRoute = require("./routes/places-routes");

const app = express();
app.use("/api/places", placeRoute);

app.use((error, req, res, next) =>{
    if(req.headerSent){
        return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || "An unknown error is found.."})


});

app.listen(4000);
