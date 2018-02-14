import fixtures from '../fixtures'
const app = require('../../api/app')
const request = require('supertest')(app)

beforeEach(done => fixtures.init(done))
afterEach(done => fixtures.drop(done))
afterAll(done => fixtures.close(done))

describe('Test skills', () => {
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
