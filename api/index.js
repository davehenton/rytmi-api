import http from 'http'
import express from 'express'
import api from './api'
import cors from 'cors'
require('dotenv').config()

let app = express()
app.server = http.createServer(app)

app.use(cors())

// api router
app.use('/api', api())

app.server.listen(process.env.PORT, () => {
  console.log(`Started on port ${app.server.address().port}`)
})

export default app
