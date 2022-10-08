const express = require('express')
const router = express.Router()

const SiteRouter = require('../app/controllers/SiteController')

router.use('/search', SiteRouter.search)
router.use('/', SiteRouter.index)

module.exports = router
