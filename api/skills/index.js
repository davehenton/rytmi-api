import { Router } from 'express'
import skills from '../../services/skills'
const router = Router()

export default () => {
  router.get('/', (req, res) => {
    skills.getAll()
      .then(skills => {
        res.json(skills)
      })
  })

  router.get('/:id', (req, res) => {
    skills.get(req.params.id)
      .then(skill => {
        res.json(skill)
      })
  })

  return router
}
