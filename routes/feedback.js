const { response } = require('express')
const express = require('express')

const router = express.Router()

module.exports = () => {
  router.get('/', (req, res) => res.send('Feedback page'))

  router.post('/', (req, res) => res.send('Feed back form posted'))

  return router
}


