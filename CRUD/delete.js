const fs = require('fs');
const jsFile = require('./read');

const errase = () => {
  
  var array = jsFile.jsFile();
  
  array.splice(process.argv[2], 1);
  
  var arrayReturn = array.map(function(element, index){
    element.id = index;
  }) 

  console.log(arrayReturn);
}

errase();