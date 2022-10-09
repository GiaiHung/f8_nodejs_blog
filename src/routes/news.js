const express = require('express')
const newsRouter = express.Router()

const NewsController = require('../app/controllers/NewsController')

newsRouter.get('/:slug', NewsController.show)
newsRouter.get('/', NewsController.index)

module.exports = newsRouter