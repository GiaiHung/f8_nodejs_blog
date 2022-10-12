const express = require('express')
const { engine } = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')
const methodOverride = require('method-override')

const SortMiddleware = require('./app/middlewares/SortMiddleware')

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

// Middleware
app.use(SortMiddleware)

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default'
        const icons = {
          default: '<i class="fa-sharp fa-solid fa-sort"></i>',
          asc: '<i class="fa-solid fa-arrow-up-wide-short"></i>',
          desc: '<i class="fa-solid fa-arrow-down-wide-short"></i>',
        }
        const types = {
          default: 'asc',
          desc: 'asc',
          asc: 'desc'
        }

        const icon = icons[sortType]
        const type = types[sortType]
            
        return `<a href="?_sort&column=${field}&type=${type}">${icon}</a>`
      }
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

