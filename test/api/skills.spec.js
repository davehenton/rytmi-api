import utils from '../utils'
const app = require('../../api/app')
const request = require('supertest')(app)

const skills = [
  {
    name: 'Vue.js',
    description: 'Vue.js blah blah',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Node.js',
    description: 'Node.js blah blah',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

beforeEach(done => {
  utils.runMigrations()
    .then(() => {
      utils.sequelize.queryInterface.bulkInsert('Skills', skills)
        .then(() => done())
    })
})

afterEach(done => {
  utils.sequelize.queryInterface.dropAllTables()
    .then(() => done())
})

afterAll(done => {
  utils.sequelize.close()
    .then(() => done())
})

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
