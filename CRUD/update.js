const fs = require('fs');
const jsFile = require('./read');

var questions = [
  'title:',
  'author:',
  'genre:',
  'year:',
  'cost:'
];

var awnsers = [];

const question = (i) => {
  console.log(questions[i]);
};

process.stdin.on('data', (data) => {
  awnsers.push(data.toString().trim());

  if (awnsers.length < questions.length) {
    question (awnsers.length);
  } else {
    
    const edit = () => {
      var id = process.argv[2] 
      var dataBase = jsFile.jsFile();
        
      dataBase.forEach(() => {
        if (dataBase.id == id) {
          dataBase.title = awnsers[0];
        }
      })
        
      fs.writeFileSync('../dataBase.json', JSON.stringify(dataBase)); 
    };

    edit();

    console.log('-'.repeat(50));
    console.log('Book edited successfully!');
    process.exit();
  }

});

question(0);