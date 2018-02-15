import { Router } from 'express'
import skillService from '../../services/skills'
import utils from '../utils'

const router = Router()
router.param('id', utils.findObjectOr404('skill', skillService))

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
    const skill = req.skill
    res.status(200).json(skill)
  })

  return router
}
