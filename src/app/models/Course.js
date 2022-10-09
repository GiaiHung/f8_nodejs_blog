const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
  name: { type: String },
  description: { type: String, maxLength: 600 },
  img: { type: String },
  slug: { type: String, maxLength: 96 },
  videoId: {type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

// MongoDB will automaticallt translates the Course to courses!
module.exports = mongoose.model('Course', Course)
