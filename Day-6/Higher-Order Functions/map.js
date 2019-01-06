const fs = require('fs');

var arrData = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', {encoding:'utf8'}));

var result = arrData.map(user => (`${user.first_name} ${user.last_name}`));

console.log(result);