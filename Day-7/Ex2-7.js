function addf(a) {
    return (b) => {
        return a + b;
    }
}

function curry(func, a) {
    return (b) => {
        return func(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function liftf2(func) {
    return (a) => {
        return (b) => {
            return func(a, b);
        }
    }
}

function add(a, b) {
    return a + b;
}

//1
var inc1 = addf(1);

//2

var inc2 = curry(add, 1);

//3

var inc3 = liftf2(add)(1);

console.log(inc3(5));
console.log(inc3(inc3(5)));