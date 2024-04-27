const express = require("express");
const Router = express.Router()

Router.post("/", (req, res)=>{
    res.json({message: 'Add new Place'})
})

Router.get("/", (req, res)=>{
    res.json({message: 'Get all places'})
})

Router.get("/:id", (req, res)=>{
    res.json({message: 'Get specfic place'})
})

Router.patch("/", (req, res)=>{
    res.json({message: 'Update a specfic place'})
})

Router.delete("/", (req, res)=>{
    res.json({message: 'delete a specfic place'})
})




module.exports = Router