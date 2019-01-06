const fs = require('fs');

var arrData = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', {encoding:'utf8'}));

var result = (arrData.reduce(function(accumulator, currentValue){

    return accumulator + currentValue.age;
}, 0))/arrData.length;


console.log(result);