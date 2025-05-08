const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('Debería retornar "Hello World!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World!');
  });
});