function exp(arg){
    if(typeof(arg) !== 'object'){
        return arg;
    }
    else{
        return arg[0](arg[1][0](arg[1][1][0](arg[1][1][1]), arg[1][2][0](arg[1][2][1])));
    }
}
function add(a, b) {
    return a + b;
}
function square(a){
    return a*a;
}

var nae = [
    Math.sqrt,
    [add,
        [square, 3],
        [square, 4]
    ]
];
console.log(exp(nae)); // 5
