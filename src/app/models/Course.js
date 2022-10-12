const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema

const Course = new Schema(
  {
    _id: {type: Number},
    name: { type: String },
    description: { type: String, maxLength: 600 },
    img: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String },
    level: { type: String },
  },
  {
    _id: false,
    timestamps: true,
  }
)

// PLUGINS
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' })
mongoose.plugin(slug)
Course.plugin(AutoIncrement);

// MongoDB will automatically translates the Course to courses!
module.exports = mongoose.model('Course', Course)
