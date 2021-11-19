const express = require('express')
const path = require("path")
const routes = require("./routes")

const FeedbackService = require('./services/FeedbackService')
const SpeakersService = require('./services/SpeakerService')

const feedbackService = new FeedbackService('./data/feedback.json')
const speakersService = new SpeakersService('./data/speakers.json')

const app = express()

const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

app.use(express.static(path.join(__dirname, './static')))
app.use('/', routes())

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
})