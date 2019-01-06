const fs = require('fs');

var arrData = JSON.parse(fs.readFileSync('./JavaScript Advanced 02 - Higher-Order Functions - Exercises - Mock Data.json', {encoding:'utf8'}));

var resultEx1 = arrData.reduce((accumulator, currentValue) => {
    accumulator.push(`${currentValue.first_name} ${currentValue.last_name}`);
    return accumulator;
},[]);

// console.log(resultEx1);

var resultEx2 = arrData.reduce((accumulator, currentValue) => {
    if(currentValue.gender === 'Male' && currentValue.age < 40){
        accumulator.push(currentValue);
    }
    return accumulator;
},[]);

// console.log(resultEx2);

function renameKeys(obj, newKeys) {
    const keyValues = Object.keys(obj).map(key => {
        const newKey = newKeys[key] || key;
        return { [newKey]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
}

const newKeys = { first_name: "firstName", last_name: "lastName" };

var resultEx4 = arrData.reduce((accumulator, currentValue) => {
    accumulator.push(renameKeys(currentValue,newKeys));
    return accumulator; // ko ddc return ma co method
}, []);

console.log(resultEx4);

