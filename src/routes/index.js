const newsRouter = require('./news')
const siteRouter = require('./site')
const courseRoute = require('./courses')

function route(app) {
  app.use('/news', newsRouter)
  app.use('/courses', courseRoute)

  app.use('/', siteRouter)
}

module.exports = route
