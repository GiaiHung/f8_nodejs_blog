const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema

mongoose.plugin(slug)

const Course = new Schema(
  {
    name: { type: String },
    description: { type: String, maxLength: 600 },
    img: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String },
    level: { type: String },
  },
  {
    timestamps: true,
  }
)

// MongoDB will automaticallt translates the Course to courses!
module.exports = mongoose.model('Course', Course)
