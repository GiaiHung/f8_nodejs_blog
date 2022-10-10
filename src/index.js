const express = require('express')
const { engine } = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')
const methodOverride = require('method-override')

const app = express()
const port = 3000

const route = require('./routes')

const db = require('./config/db')
db.connect()

app.use(express.static(path.join(__dirname, 'public')))
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

// Override form action format
app.use(methodOverride('_method'))

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  })
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Route
route(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
