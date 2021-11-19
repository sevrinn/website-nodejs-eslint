const express = require('express')

const router = express.Router()

module.exports = (params) => {

  const {feedbackService} = params

  router.get('/', async (req, res) => {
    const feedback = await feedbackService.getList()
    res.json(feedback)
  })

  router.post('/', async (req, res) => {
    return res.send('Feedback from posted')
  })

  return router
}


