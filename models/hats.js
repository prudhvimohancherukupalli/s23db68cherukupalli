const mongoose = require("mongoose");

const hatsSchema = mongoose.Schema({
  style: {
    type: String,
    required: true, // Ensures that the 'style' field is required
  },
  color: {
    type: String,
    required: true, // Ensures that the 'color' field is required
    maxlength: [25, "Color must be at most 25 characters"],
  },
  price: {
    type: Number,
    min: [5, "Price must be greater than or equal to 5"],
    max: [1000, "Price must be less than or equal to 1000"],
  },
});

module.exports = mongoose.model("hats", hatsSchema);
