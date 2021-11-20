const express = require('express')
const path = require("path")
const cookieSession = require('cookie-session')
const routes = require("./routes")

const FeedbackService = require('./services/FeedbackService')
const SpeakersService = require('./services/SpeakerService')

const feedbackService = new FeedbackService('./data/feedback.json')
const speakersService = new SpeakersService('./data/speakers.json')

const app = express()

const port = 3000

app.set('trust proxy', 1)

app.use(
  cookieSession({
    name: 'session',
    keys: ['Ghdur687399s7w', 'hhjjdf89s866799'],
  }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

app.locals.siteName = 'ROUX Meetups'

app.use(express.static(path.join(__dirname, './static')))

app.use((req, res, next) => {
  res.locals.someVariable = 'hello'
  return next()
})

app.use('/', routes({
  feedbackService,
  speakersService
}))

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
})