function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function reverse(func){
    return (a,b) => {
        return func(b,a);
    }
}

var bus = reverse(sub);
console.log(bus(3,2));