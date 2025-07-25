const translateToKorean = require('./server');

translateToKorean('Good morning')
  .then(console.log)
  .catch(console.error);