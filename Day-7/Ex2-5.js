// function addf(a){
//     return (b) => {
//         return a+ b;
//     }
// }

// function liftf(func){
//     return func;
// }

// var add = liftf(addf);
// console.log(add(3)(4));

// console.log(liftf(addf)(5)(6))


function liftf2(func){
    return (a) => {
        return (b) => {
            return func(a,b);
        }
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

console.log(liftf2(add)(3)(4));
console.log(liftf2(mul)(5)(6));
console.log(liftf2(sub)(10)(4));


