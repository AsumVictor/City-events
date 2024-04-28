const express  = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const place_routes = require('./controller/api_controller')
const handleError = require("./middleware/error");
const bodyParser = require("body-parser");

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "./.env",
    })
}

app.use(cors({
    origin: "*",
}))

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: true }));


// All Routes endpoints
// - add new place
// - get all place 
// - get specific place
// - delete place
// - update place

app.use('/api', place_routes)

app.use(handleError)
module.exports = app;