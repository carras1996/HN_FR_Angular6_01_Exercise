function exp(arg){
    if(typeof(arg) !== 'object'){
        return arg;
    }
    else return arg[0](arg[1],arg[2]);
}

function mul(a, b) {
    return a * b;
}
var sae = [mul, 5, 11];
console.log(exp(sae)); // 55
console.log(exp(42)); // 42
