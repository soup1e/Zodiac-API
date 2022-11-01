const { Router } = require('express');

const { zodiacs } = require('../zodiac-data');

module.exports = Router()
  .get('/horoscope/:name', (req, res) => {
    const find = zodiacs.find((zodiac) => zodiac.name === req.params.name);
    res.json(find.horoscope);
  })
  .get('/:id', (req, res) => {
    const match = zodiacs.find((zodiac) => zodiac.id === req.params.id);
    res.json(match);
  })
  .get('/', (req, res) => {
    const filteredData = [];
    zodiacs.map((zodiac) => {
      filteredData.push({ id: zodiac.id, name: zodiac.name });
    });
    res.json(filteredData);
  });
