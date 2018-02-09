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

describe('Test Users', () => {
  test('It should response 200 the GET method', () => {
    return request
      .get('/api/users')
      .expect(200)
  })
  test('respond with json', () => {
    return request
      .get('/api/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  })
  test('post a new user', () => {
    let user = {
      'username': 'Test.User',
      'password': 'fadsf',
      'active': true,
      'admin': false
    }
    return request
      .post('/api/users')
      .send(user)
      .expect(201)
  })
})

describe('Test user details', () => {
  test('It should response 200 the GET method', () => {
    return request
      .get('/api/users/1')
      .expect(200)
  })
  test('respond with json', () => {
    return request
      .get('/api/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  })
  test('update user', async () => {
    const current = await request.get('/api/users/1')
    let user = {
      'username': 'Test.User',
      'password': 'fadsf',
      'active': true,
      'admin': false
    }
    const new_ = await request
      .put('/api/users/1')
      .send(user)

    expect(new_.statusCode).toBe(200)
    expect(current.body.username).not.toBe(new_.body.username)
  })
})
