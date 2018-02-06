import { Router } from 'express'
import profileService from '../../services/profiles'
import profileSkillService from '../../services/profileSkills'
const router = Router()

export default () => {
  router.get('/', (req, res) => {
    profileService.getActive()
      .then(profiles => {
        res.json(profiles)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.post('/', (req, res) => {
    profileService.create(req.body)
      .then(profile => {
        res.status(201).json(profile)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.get('/all', (req, res) => {
    profileService.getAll()
      .then(profiles => {
        res.json(profiles)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.get('/:id', (req, res) => {
    profileService.get(req.params.id)
      .then(profile => {
        res.json(profile)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.put('/:id', (req, res) => {
    profileService.update(req.params.id, req.body)
      .then(profile => {
        res.json(profile)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.get('/:id/skills', (req, res) => {
    profileSkillService.getByProfileId(req.params.id)
      .then(profileSkills => {
        res.json(profileSkills)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.post('/:id/skills', (req, res) => {
    profileSkillService.create(req.params.id, req.body)
      .then(profileSkill => {
        res.status(201).json(profileSkill)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.get('/:id/skills/:profileSkillId', (req, res) => {
    profileSkillService.get(req.params.profileSkillId)
      .then(profileSkill => {
        res.json(profileSkill)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.put('/:id/skills/:profileSkillId', (req, res) => {
    profileSkillService.update(req.params.id, req.params.profileSkillId, req.body)
      .then(profileSkill => {
        res.json(profileSkill)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  router.delete('/:id/skills/:profileSkillId', (req, res) => {
    profileSkillService.delete(req.params.id, req.params.profileSkillId)
      .then(profileSkill => {
        res.status(204).json(profileSkill)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })

  return router
}
