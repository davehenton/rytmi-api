import { Router } from 'express'
import users from '../../services/users'
const router = Router()

export default () => {
  router.get('/', (req, res) => {
    users.getAll()
      .then(users => {
        res.json(users)
      })
  })

  router.get('/:id', (req, res) => {
    users.get(req.params.id)
      .then(user => {
        res.json(user)
      })
  })

  return router
}
