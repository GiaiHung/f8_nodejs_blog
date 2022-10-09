const Course = require('../models/Course')
const { mongooseObject } = require('../../utils/mongoose')

class CourseController {
  show(req, res, next) {
    // GET /courses/:slug
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', {
          course: mongooseObject(course),
        })
      })
      .catch(next)
  }
}

module.exports = new CourseController()
