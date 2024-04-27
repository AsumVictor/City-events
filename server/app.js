const express  = require("express");
const app = express();
const cors = require("cors");

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

module.exports = app;