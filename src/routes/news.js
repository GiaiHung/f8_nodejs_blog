const express = require('express')
const newsRouter = express.Router()

const NewsController = require('../app/controllers/NewsController')

newsRouter.use('/:slug', NewsController.show)
newsRouter.use('/', NewsController.index)

module.exports = newsRouter