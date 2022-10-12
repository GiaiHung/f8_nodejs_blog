const Course = require('../models/Course')
const { mongooseArrayToObject } = require('../../utils/mongoose')

class MeController {
  // GET /me/stored/courses
  storedCourses(req, res, next) {
    let courseQuery = Course.find({})
    
    if(req.query.hasOwnProperty('_sort')) {
      courseQuery.sort({
        [req.query.column]: req.query.type
      })
    }

    Promise.all([courseQuery, Course.countDocumentsDeleted()]).then(
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
