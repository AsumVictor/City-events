const express = require("express");
const Router = express.Router();
const Model = require("../model/api-model");
const CatchAsynError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../lib/ErrorHandler");
const isOpen = require("../lib/getOpeningHours");

Router.post(
  "/",
  CatchAsynError(async (req, res, next) => {
    try {
      await Model.create(req.body);
      res.json({
        success: true,
        message: "You have successfully added a place!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

Router.get(
  "/",
  CatchAsynError(async (req, res, next) => {
    try {
      let places = await Model.find({}, "name location open_hours images");

      places = places.map((place) => {
        return {
          name: place.name,
          location: place.location,
          images: place.images,
          is_open: isOpen(place.open_hours),
        };
      });

      res.json({
        success: true,
        data: places,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

Router.get(
  "/:name",
  CatchAsynError(async (req, res, next) => {
    let name = req.params.name;
    let place = await Model.findOne({
      name: name,
    });

    if (!place) {
      return next(new ErrorHandler("Invalid place name", 404));
    }

    place = {
        name: place.name,
        location: place.location,
        images: place.images,
        description: place.description,
        open_hours: place.open_hours,
        is_open: isOpen(place.open_hours),
      }
    
    res.json({ success: true, data: place });
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
