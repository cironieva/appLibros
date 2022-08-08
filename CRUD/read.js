const fs = require('fs');

const jsFile = () => {
  return JSON.parse(fs.readFileSync('../dataBase.json', 'utf-8'));
}

module.exports = { jsFile };