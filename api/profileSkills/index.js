import { Router } from 'express'
import profileSkillService from '../../services/profileSkills'
import {findObjectOr404, wrapAsync} from '../utils'

const router = Router()
router.param('id', findObjectOr404('profileSkill', profileSkillService))

export default () => {
  router.get('/', wrapAsync(async (req, res) => {
    const profileSkills = await profileSkillService.getAll()
    res.json(profileSkills)
  }))

  router.get('/:id', wrapAsync(async (req, res) => {
    const profileSkill = req.profileSkill
    res.json(profileSkill)
  }))

  return router
}
