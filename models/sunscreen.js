const mongoose = require("mongoose");
const Schema = mongoose.Schema

const sunscreenSchema = new Schema ({
  brand: String,
  SPF: String,
  price: String,
  notes: [String], 
  like: Boolean

})

module.exports = mongoose.model("Sunscreen", sunscreenSchema);
