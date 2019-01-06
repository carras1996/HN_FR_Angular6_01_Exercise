function filterMethod(array, callback, initialValue) {
    let result = initialValue;
    for (let i of array) {
        result = callback(result, i);
    }
    return result;
}

function reduceFunc(initialValue, i) {
    return initialValue + i;
}

function mapFunc(initialValue, i){
    initialValue.push(i*i);
    return initialValue;
}

function filterFunc(initialValue, i){
    if(i%2 === 0){
        initialValue.push(i);
    }
    return initialValue;
}


console.log(filterMethod([1, 2, 3, 4, 5, 6], reduceFunc, 5));
console.log(filterMethod([1, 2, 3, 4, 5, 6], mapFunc, []));
console.log(filterMethod([1, 2, 3, 4, 5, 6], filterFunc, []));