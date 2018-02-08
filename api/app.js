
import express from 'express'
import api from './api'
require('dotenv').config()

const app = express()
if (process.env.NODE_ENV === 'development') {
  app.set('json spaces', 2)
}

// api router
app.use('/api', api())

module.exports = app
