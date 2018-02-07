import utils from '../utils'
import profileService from '../../services/profiles'

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
  it('Should get all profiles', async () => {
    const profiles = await profileService.getAll()
    expect(profiles.length).toEqual(50)
  })
})

describe('get', () => {
  it('Should get profile by id', async () => {
    const profile = await profileService.get(1)
    expect(profile).not.toBeNull()
  })
})
