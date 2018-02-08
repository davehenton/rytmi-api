import { Router } from 'express'
import profileSkillService from '../../services/profileSkills'
const router = Router()

export default () => {
  router.get('/', (req, res) => {
    profileSkillService.getAll()
      .then(profileSkills => {
        res.json(profileSkills)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.get('/:id', (req, res) => {
    profileSkillService.get(req.params.id)
      .then(profileSkills => {
        res.json(profileSkills)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  return router
}
