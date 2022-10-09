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

  create(req, res, next) {
    // GET /courses/create
    res.render('courses/create')
  }

  store(req, res, next) {
    const formData = req.body
    formData.img = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const course = new Course(formData)
    course
      .save()
      .then(() => res.redirect('/'))
      .catch((err) => console.log(err))
  }
}

module.exports = new CourseController()
