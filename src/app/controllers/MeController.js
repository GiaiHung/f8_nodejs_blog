const Course = require('../models/Course')
const { mongooseArrayToObject } = require('../../utils/mongoose')

class MeController {
  // GET /me/stored/courses
  storedCourses(req, res) {
    Course.find({}).then((courses) =>
      res.render('me/storedCourses', {
        courses: mongooseArrayToObject(courses),
      })
    )
  }
}

module.exports = new MeController()
