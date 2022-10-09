const express = require('express')
const courseRouter = express.Router()

const CourseController = require('../app/controllers/CourseController')

courseRouter.get('/create', CourseController.create)
courseRouter.post('/store', CourseController.store)
courseRouter.get('/:slug', CourseController.show)

module.exports = courseRouter
