import { Router } from 'express'
import skillService from '../../services/skills'
const router = Router()

export default () => {
  router.get('/', (req, res) => {
    skillService.getAll()
      .then(skills => {
        res.json(skills)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.get('/:id', (req, res) => {
    skillService.get(req.params.id)
      .then(skill => {
        res.json(skill)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  return router
}
