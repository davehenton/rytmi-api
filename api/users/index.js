import { Router } from 'express'
import userService from '../../services/users'
const router = Router()

export default () => {
  router.get('/', (req, res) => {
    userService.getAll()
      .then(users => {
        res.json(users)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.post('/', (req, res) => {
    userService.create(req.body)
      .then(user => {
        res.status(201).json(user)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.get('/:id', (req, res) => {
    userService.get(req.params.id)
      .then(user => {
        res.json(user)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.put('/:id', (req, res) => {
    userService.update(req.params.id, req.body)
      .then(user => {
        res.json(user)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  return router
}
