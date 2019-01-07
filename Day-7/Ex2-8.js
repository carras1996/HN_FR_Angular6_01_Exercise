function twice(func){
    return (arg) => {
        return func(arg,arg);
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

console.log(add(11, 11)); // 22
var doubl = twice(add);
console.log(doubl(11)); // 22
var square = twice(mul);
console.log(square(11)); // 121

