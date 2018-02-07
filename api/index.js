
import cors from 'cors'

const app = require('./app')
app.use(cors())

let server = app.listen(process.env.PORT, () => {
  console.log(`Started on port ${server.address().port}`)
})
