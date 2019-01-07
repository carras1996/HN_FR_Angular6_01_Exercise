var countCall = 0;
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}
function limit(func, arg) {
    return (a, b) => {
        countCall++;
        if (countCall > arg) {
            return undefined;
        }
        return func(a, b);
    }
}

var addLimited = limit(add, 1);
console.log(addLimited(3, 4)); // 7
console.log(addLimited(3, 4));
console.log(addLimited(3, 4));

