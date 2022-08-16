const fs = require('fs');
const jsFile = require('./read');

const errase = () => {
  
  var array = jsFile.jsFile();
  
  // Debería borrarse mediante ID, en este caso el splice buscaría que el valor del libro completo equivalga a tu argv[2]
  array.splice(process.argv[2], 1);
  
  // ¿Qué retorna este map?
  var arrayReturn = array.map(function(element, index){
    element.id = index;
  }) 

  console.log(arrayReturn);
}

errase();
