const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')
const Schema = mongoose.Schema

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

// PLUGINS
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' })
mongoose.plugin(slug)

// MongoDB will automatically translates the Course to courses!
module.exports = mongoose.model('Course', Course)
