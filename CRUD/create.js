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
    
    const create = () => {

      var dataBase = jsFile.jsFile();

      // ¿Como se resuelve si se elimina el primer libro del array y luego se añade uno nuevo? Agregando IDs mediante el length y nada más, haría que se repitan
      // IDs en este caso.
      // Habría que chequear mediante un filter o find la prexistencia del ID que busca asignarse y modificarlo o no en consecuencia.
      dataBase.push(
        {
          title:awnsers[0],
          author:awnsers[1],
          genre:awnsers[2],
          year:awnsers[3],
          cost:awnsers[4],
          price:(awnsers[4]*1.4).toFixed(2),
          id:dataBase.length
        }
      );
      fs.writeFileSync('../dataBase.json', JSON.stringify(dataBase)); 
    };

    create();

    console.log('-'.repeat(50));
    console.log('Book added successfully!');
    process.exit();
  }

});

question(0);

// ver video https://www.youtube.com/watch?v=2mEdCSpfOHI&t=624s
