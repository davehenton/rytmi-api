import utils from '../utils'
import userService from '../../services/users'

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
  it('Should get all users', async () => {
    const users = await userService.getAll()
    expect(users.length).toEqual(50)
  })
})

describe('get', () => {
  it('Should get user by id', async () => {
    const user = await userService.get(1)
    expect(user).not.toBeNull()
  })
})
