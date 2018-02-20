import { Router } from 'express'
import skillService from '../../services/skills'
import {findObjectOr404, wrapAsync} from '../utils'

const router = Router()
router.param('id', findObjectOr404('skill', skillService))

export default () => {
  router.get('/', wrapAsync(async (req, res) => {
    const skills = await skillService.getAll()
    res.json(skills)
  }))

  router.get('/:id', wrapAsync(async (req, res) => {
    const skill = req.skill
    res.status(200).json(skill)
  }))

  return router
}
