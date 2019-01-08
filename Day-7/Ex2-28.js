function add(a, b) {
    return a + b;
}

function addg(numa){
    if(numa === undefined){
        return undefined;
    }
}

console.log(addg()); // undefined
console.log(addg(2)()); // 2
console.log(addg(2)(7)()); // 9
console.log(addg(3)(0)(4)()); // 7
console.log(addg(2)()); // 2
