const Course = require('../models/Course')
const { mongooseObject } = require('../../utils/mongoose')

class CourseController {
  // GET /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', {
          course: mongooseObject(course),
        })
      })
      .catch(next)
  }

  // GET /courses/create
  create(req, res, next) {
    res.render('courses/create')
  }

  // GET /courses/edit 
  edit(req, res, next) {
    Course.findById(req.params.id).then((course) =>
      res.render('courses/edit', {
        course: mongooseObject(course),
      })
    )
  }

  // POST /courses/store
  store(req, res, next) {
    const formData = req.body
    formData.img = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const course = new Course(formData)
    course
      .save()
      .then(() => res.redirect('/'))
      .catch(next)
  }

  // PUT /courses/:id
  update(req, res, next) {
    Course.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next)
  }
}

module.exports = new CourseController()
