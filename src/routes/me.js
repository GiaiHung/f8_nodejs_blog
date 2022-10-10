const express = require('express')
const meRouter = express.Router()

const MeController = require('../app/controllers/MeController')

meRouter.get('/stored/courses', MeController.storedCourses)
meRouter.get('/trash/courses', MeController.trashCourses)
meRouter.get('/restore')

module.exports = meRouter
