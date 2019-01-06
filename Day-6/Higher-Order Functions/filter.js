const fs = require('fs');

var arrData = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', {encoding:'utf8'}));
var result = arrData.filter(user => (user.gender === 'Male' && user.age < 40));
console.log(result);

