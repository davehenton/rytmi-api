var restify = require('restify')
require('dotenv').config()

const tsFormat = () => (new Date()).toLocaleTimeString()
const winston = require('winston')
const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      level: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
    })
  ]
})

export function startServer () {
  const server = restify.createServer({
    name: 'Rytmi API'
  })

  server.use(restify.plugins.acceptParser(server.acceptable))
  server.use(restify.plugins.bodyParser({ mapParams: true }))
  server.use(restify.plugins.queryParser({ mapParams: true }))
  server.use(restify.plugins.authorizationParser())

  server.get('/', (req, res, next) => { // debug
    logger.info('GET request to', req.url, 'from', req.headers['x-forwarded-for'] || req.connection.remoteAddress)
  })

  server.listen(process.env.PORT || 8080, process.env.IP || '0.0.0.0', () =>
    logger.info('%s server listening at %s', server.name, server.url)
  )
}
