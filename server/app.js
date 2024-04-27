const express  = require("express");
const app = express();
const cors = require("cors");
const place_routes = require('./controller/api_controller')

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "./.env",
    })
}

app.use(cors({
    origin: "*",
}))

app.use(express.json())
app.use(express.static("images"))

// All Routes endpoints
// - add new place
// - get all place 
// - get specific place
// - delete place
// - update place

app.use('/api', place_routes)

module.exports = app;