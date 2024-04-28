const mongoose = require("mongoose");

const placesSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill the name field"],
    unique: true,
    validate: {
      validator: async function (value) {
        const existing_place = await this.findOne({
          name: { $regex: new RegExp(`^${value}$`, "i") },
        });

        return !existing_place
      },
    },
  },
  description: {
    type: String,
    required: [true, "Please fill the Description field"],
  },
  location: {
    type: String,
    required: [true, "Please fill the Location field"],
  },
  open_hours: {
    type: Map,
    of: [String],
    required: [true, "Please speficy opening times"],
  },
  images: [
    {
      type: String,
      require: ["true", "Upload at least one image"],
    },
  ],
});

// Create a Node.js server with CRUD endpoints for managing places. Each place should at least have the following attributes:

// - Name
// - Description
// - Location
// - **Open Hours**
// - Images (Handle file uploads for images)

const places = mongoose.model("places", placesSchema);
module.exports = places;
