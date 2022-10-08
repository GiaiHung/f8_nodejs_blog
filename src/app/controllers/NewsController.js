class NewsController {
  // [GET] /news
  index(req, res) {
    res.render('news')
  }

  show(req, res) {
    res.send('HELLO')
  }
}

module.exports = new NewsController()
