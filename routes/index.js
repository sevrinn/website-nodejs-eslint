const express = require('express')

const speakerRoute = require('./speakers')

const feedbackRoute = require('./feedback')

const router = express.Router()

module.exports = (params) => {
  router.get('/', (req, res) => {

    if(!req.session.visitcount) {
      req.session.visitcount = 0
    }
    req.session.visitcount += 1
    console.log(`Number of visits: ${req.session.visitcount}`)

    res.render('pages/index', { pageTitle: 'Welcome'})
  })

  router.use('/speakers', speakerRoute(params))
  router.use('/feedback', feedbackRoute(params))

  return router
}


