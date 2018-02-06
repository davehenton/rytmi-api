import utils from '../utils'
import profileSkillService from '../../services/profileSkills'

beforeEach(done => {
  utils.runMigrations()
    .then(() => utils.runSeeders()
      .then(() => done()))
})

afterEach(done => {
  utils.rollbackSeeders()
    .then(() => utils.rollbackMigrations()
      .then(() => done()))
})

describe('get', () => {
  it('Should get profileSkills for profile', async () => {
    const profileSkills = await profileSkillService.getByProfileId(1)
    expect(profileSkills.length).toBe(3)
  })
})
