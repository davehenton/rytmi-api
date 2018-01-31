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
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.get('/all', (req, res) => {
    profiles.getAll()
      .then(profiles => {
        res.json(profiles)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.get('/:id', (req, res) => {
    profiles.get(req.params.id)
      .then(profile => {
        res.json(profile)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.put('/:id', (req, res) => {
    profiles.update(req.params.id, req.body)
      .then(profile => {
        res.json(profile)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.get('/:id/skills', (req, res) => {
    profileSkills.getByProfileId(req.params.id)
      .then(profileSkills => {
        res.json(profileSkills)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.post('/:id/skills', (req, res) => {
    profileSkills.create(req.params.id, req.body)
      .then(profileSkill => {
        res.status(201).json(profileSkill)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.get('/:id/skills/:profileSkillId', (req, res) => {
    profileSkills.get(req.params.profileSkillId)
      .then(profileSkill => {
        res.json(profileSkill)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.put('/:id/skills/:profileSkillId', (req, res) => {
    profileSkills.update(req.params.id, req.params.profileSkillId, req.body)
      .then(profileSkill => {
        res.json(profileSkill)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.delete('/:id/skills/:profileSkillId', (req, res) => {
    profileSkills.delete(req.params.id, req.params.profileSkillId)
      .then(profileSkill => {
        res.status(204).json(profileSkill)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  return router
}
