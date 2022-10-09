const Course = require('../models/Course')
const { mongooseArrayToObject } = require('../../utils/mongoose')

class SiteController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('home', { courses: mongooseArrayToObject(courses) })
      })
      .catch((err) => next(err))
  }

  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteController()
