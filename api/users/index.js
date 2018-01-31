import { Router } from 'express'
import users from '../../services/users'
const router = Router()

export default () => {
  router.get('/', (req, res) => {
    users.getAll()
      .then(users => {
        res.json(users)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.post('/', (req, res) => {
    users.create(req.body)
      .then(userAndProfile => {
        res.status(201).json(userAndProfile)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.get('/:id', (req, res) => {
    users.get(req.params.id)
      .then(user => {
        res.json(user)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.put('/:id', (req, res) => {
    users.update(req.params.id, req.body)
      .then(user => {
        res.json(user)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  return router
}
