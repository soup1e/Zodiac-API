const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../lib/zodiac-data');

describe('zodiac routes', () => {
  it('/zodiac should return a list of zodiac signs', async () => {
    const resp = await request(app).get('/zodiac');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(resp.body).toEqual(expected);
  });

  it('zodiac:id should return details about the sign', async () => {
    const res = await request(app).get('/zodiac/1');
    const sign = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
      horoscope:
        'You may have a hard time appreciating the little things this morning, dear Aquarius, as the moon forms a harsh square with the nodes of fate. Certain lifestyle luxuries, personal success, and status may not taste as sweet as youd hoped, causing you to close off emotionally. Dont be hard on yourself if youre feeling disenchanted with the world, but try to reach for that which brings you joy. The vibe will be charged within your domestic affairs when Luna squares off with Uranus this afternoon, so youll want to be on guard for finicky appliances or temperamental roommates.',
    };
    expect(res.body).toEqual(sign);
  });

  it('horoscopes/:sign should route to horoscope', async () => {
    const res = await request(app).get('/zodiac/horoscope/aquarius');
    const sign =
      'You may have a hard time appreciating the little things this morning, dear Aquarius, as the moon forms a harsh square with the nodes of fate. Certain lifestyle luxuries, personal success, and status may not taste as sweet as youd hoped, causing you to close off emotionally. Dont be hard on yourself if youre feeling disenchanted with the world, but try to reach for that which brings you joy. The vibe will be charged within your domestic affairs when Luna squares off with Uranus this afternoon, so youll want to be on guard for finicky appliances or temperamental roommates.';
    expect(res.body).toEqual(sign);
  });
});
