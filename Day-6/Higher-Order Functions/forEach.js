const fs = require('fs');

var arrData = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', {encoding:'utf8'}));
var result = [];

arrData.forEach(element => {
    result.push(`${element.first_name} ${element.last_name}`);
});
console.log(result);