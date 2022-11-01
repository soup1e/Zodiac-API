const { Router } = require('express');

const { zodiacs } = require('../zodiac-data');

module.exports = Router().get('/', (req, res) => {
  const filteredData = [];
  zodiacs.map((zodiac) => {
    filteredData.push({ id: zodiac.id, name: zodiac.name });
  });
  res.json(filteredData);
});
