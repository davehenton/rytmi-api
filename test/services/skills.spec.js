import utils from '../utils'
import skillService from '../../services/skills'

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

describe('getAll', () => {
  it('Should get all skills', async () => {
    const skills = await skillService.getAll()
    expect(skills.length).toEqual(10)
  })
})

describe('get', () => {
  it('Should get skill by id', async () => {
    const skill = await skillService.get(1)
    expect(skill).not.toBeNull()
  })
})
