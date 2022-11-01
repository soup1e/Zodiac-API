const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../lib/zodiac-data');

describe('zodiac route', () => {
  it('/zodiac should return a list of zodiac signs', async () => {
    const resp = await request(app).get('/zodiac');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(resp.body).toEqual(expected);
  });
});
