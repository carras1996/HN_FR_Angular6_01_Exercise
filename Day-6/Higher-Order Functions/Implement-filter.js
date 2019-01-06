function filterMethod(array, callback) {
    let result = [];
    for (let i of array) {
        if (callback(i)) {
            result.push(i);
        }
    }
    return result;
}

function filterFunc(i) {
    return (i % 2 === 0);
}

console.log(filterMethod([1, 2, 3, 4, 5, 6, 7], filterFunc));