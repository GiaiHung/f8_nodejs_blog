const express = require('express')
const courseRouter = express.Router()

const CourseController = require('../app/controllers/CourseController')

courseRouter.get('/create', CourseController.create)
courseRouter.get('/:id/edit', CourseController.edit)
courseRouter.get('/:slug', CourseController.show)

courseRouter.post('/store', CourseController.store)

courseRouter.put('/:id', CourseController.update)

module.exports = courseRouter
