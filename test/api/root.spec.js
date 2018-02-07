const request = require('supertest')
const app = require('../../api/app')

describe('Test the root api path', () => {
  test('It should response 200 the GET method', async () => {
    const response = await request(app).get('/api/')
    expect(response.statusCode).toBe(200)
  })
})
