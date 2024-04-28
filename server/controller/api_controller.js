const express = require("express");
const Router = express.Router();
const Model = require("../model/api-model");
const CatchAsynError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../lib/ErrorHandler");

Router.post(
  "/",
  CatchAsynError(async (req, res, next) => {
    try {
      await Model.create(req.body);
      res.json({ message: "Add new Place" });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

Router.get(
  "/",
  CatchAsynError(async (req, res, next) => {
    res.json({ message: "Get all places" });
  })
);

Router.get(
  "/:id",
  CatchAsynError(async (req, res, next) => {
    res.json({ message: "Get specfic place" });
  })
);

Router.patch(
  "/",
  CatchAsynError(async (req, res, next) => {
    res.json({ message: "Update a specfic place" });
  })
);

Router.delete("/", async (req, res, next) => {
  res.json({ message: "delete a specfic place" });
});

module.exports = Router;
