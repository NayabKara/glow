const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notesSchema = new Schema ({
  notes: [String]

})

module.exports = mongoose.model("Notes", notesSchema);