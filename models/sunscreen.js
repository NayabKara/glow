const mongoose = require("mongoose");
const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    content: String,
  }
);



const sunscreenSchema = new Schema ({
  brand: String,
  SPF: String,
  price: String,
  notes: [String], 
  like: Boolean,
  reviews: [reviewSchema]

})

module.exports = mongoose.model("Sunscreen", sunscreenSchema);
