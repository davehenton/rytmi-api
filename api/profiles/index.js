import { Router } from 'express'
import profiles from '../../services/profiles'
import profileSkills from '../../services/profileSkills'
const router = Router()

export default () => {
  router.get('/', (req, res) => {
    profiles.getActive()
      .then(profiles => {
        res.json(profiles)
      })
  })

  router.get('/all', (req, res) => {
    profiles.getAll()
      .then(profiles => {
        res.json(profiles)
      })
  })

  router.get('/:id', (req, res) => {
    profiles.get(req.params.id)
      .then(profile => {
        res.json(profile)
      })
  })

  router.get('/:id/skills', (req, res) => {
    profileSkills.getByProfileId(req.params.id)
      .then(profileSkills => {
        res.json(profileSkills)
      })
  })

  router.get('/:id/skills/:profileSkillId', (req, res) => {
    profileSkills.get(req.params.profileSkillId)
      .then(profileSkill => {
        res.json(profileSkill)
      })
  })

  return router
}
