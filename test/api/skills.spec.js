jest.mock('../../services/skills')

const app = require('../../api/app')
const request = require('supertest')(app)

const SKILLS = [
  {
    'id': 1,
    'name': 'Vue.js',
    'description': 'Nesciunt non minima perspiciatis praesentium aperiam voluptatem.',
    'createdAt': '2018-02-06T13:38:46.767Z',
    'updatedAt': '2018-02-06T13:38:46.767Z'
  },
  {
    'id': 2,
    'name': 'Node.js',
    'description': 'Esse vel qui occaecati omnis quis. Voluptatum quis et libero.',
    'createdAt': '2018-02-06T13:38:46.767Z',
    'updatedAt': '2018-02-06T13:38:46.767Z'
  }
]

describe('Test skills', () => {
  beforeEach(() => {
    require('../../services/skills').__setMockSkills(SKILLS)
  })

  it('should response 200 the GET method ', () => {
    return request
      .get('/api/skills')
      .expect(200)
  })
  it('should response 404 on not defined route.', () => {
    return request
      .get('/api/persons')
      .expect(404)
  })
  it('should respond with json', () => {
    return request
      .get('/api/skills')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  })
  /*it('should return 2 skills', async () => {
    const response = await request.get('/api/skills')
    expect(response.body.length).toBe(2)
  })*/
  it.skip('should create a new skill', () => { // post not yet implemented
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
