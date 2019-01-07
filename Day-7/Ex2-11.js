function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function composeb(func1, func2){
    return (a,b,c) => {
        return func2(func1(a,b),c);
    }
}

console.log(composeb(add,mul)(2,3,7));