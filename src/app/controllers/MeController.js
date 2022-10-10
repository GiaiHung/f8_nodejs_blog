const Course = require('../models/Course')
const { mongooseArrayToObject } = require('../../utils/mongoose')

class MeController {
  // GET /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()]).then(
      ([courses, deletedCount]) => {
        res.render('me/storedCourses', {
          deletedCount,
          courses: mongooseArrayToObject(courses),
        })
      }
    )
  }

  // GET /me/deletedCourses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render('me/deletedCourses', {
          courses: mongooseArrayToObject(courses),
        })
      )
      .catch(next)
  }

  restoreCourse(req, res, next) {}
}

module.exports = new MeController()
