import utils from '../utils'
const app = require('../../api/app')
const request = require('supertest')(app)

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

describe('Test sills', () => {
  test('It should response 200 the GET method', () => {
    return request
      .get('/api/skills')
      .expect(200)
  })
  test('respond with json', () => {
    return request
      .get('/api/skills')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  })
  test.skip('post a new skill', () => { // post not yet implemented
    let skill = {
      'name': 'Testing',
      'description': 'This is a test skill'
    }
    return request
      .post('/api/skills')
      .send(skill)
      .expect(201)
  })
})

describe('Test skill details', () => {
  test('It should response 200 the GET method', () => {
    return request
      .get('/api/skills/1')
      .expect(200)
  })
  test('respond with json', () => {
    return request
      .get('/api/skills/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  })
})
