function curry(func, a){
    return (b) => {
        return func(a,b);
    }
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

console.log(curry(add,3)(6));
console.log(curry(sub,3)(6));
console.log(curry(mul,3)(6));