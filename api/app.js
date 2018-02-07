
import express from 'express'
import api from './api'


const app = express()


// api router
app.use('/api', api())

module.exports = app
