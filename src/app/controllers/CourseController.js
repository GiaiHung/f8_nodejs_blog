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

  // POTS /courses/handle-form-actions
  actions(req, res, next) {
    switch (req.body.action) {
      case 'delete':
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect('back'))
          .catch(next)
        break

      case 'restore':
        Course.restore({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect('back'))
          .catch(next)
        break

      case 'permanent-delete':
        Course.deleteMany({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect('back'))
          .catch(next)
        break

      default:
        res.json({ error: 'Invalid action' })
    }
  }

  // PUT /courses/:id
  update(req, res, next) {
    Course.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next)
  }

  // DELETE /courses/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  // DELETE /courses/:id/force
  forceDelete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  // PATCH /courses/restore
  patch(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }
}

module.exports = new CourseController()
