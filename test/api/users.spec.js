import fixtures from '../fixtures'
const app = require('../../api/app')
const request = require('supertest')(app)
const db = fixtures.db

beforeEach(done => fixtures.init(done))
afterEach(done => fixtures.drop(done))
afterAll(done => fixtures.close(done))

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
  test('It should response 200 the GET method', async () => {
    const fetched = await request.get('/api/users/' + db.user1.id)
    expect(fetched.statusCode).toBe(200)
    expect(fetched.body).toMatchObject(db.user1)
  })
  test('respond with json', () => {
    return request
      .get('/api/users/' + db.user1.id)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  })
  test('update user', async () => {
    const current = await request.get('/api/users/' + db.user1.id)
    let user = {
      'username': 'Test.User',
      'password': 'fadsf',
      'active': true,
      'admin': false
    }
    const new_ = await request
      .put('/api/users/' + db.user1.id)
      .send(user)

    expect(new_.statusCode).toBe(200)
    expect(current.body.username).not.toBe(new_.body.username)
  })
})
