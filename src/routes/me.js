const express = require('express')
const meRouter = express.Router()

const MeController = require('../app/controllers/MeController')

meRouter.get('/stored/courses', MeController.storedCourses)

module.exports = meRouter
