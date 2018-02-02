import { version } from '../package.json'
import { Router } from 'express'
import winston from 'winston'
import bodyParser from 'body-parser'

import profiles from './profiles'
import skills from './skills'
import users from './users'

require('dotenv').config()

const tsFormat = () => (new Date()).toLocaleTimeString()
const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      level: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
    })
  ]
})

export default () => {
  let api = Router()
  api.use(bodyParser.json())

  api.get('/', (req, res) => {
    logger.info('GET request to', req.url, 'from', req.headers['x-forwarded-for'] || req.connection.remoteAddress)
    res.json({ version })
  })

  api.use('/profiles', profiles())
  api.use('/skills', skills())
  api.use('/users', users())

  return api
}
