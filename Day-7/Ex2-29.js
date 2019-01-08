// Ex2.29
function liftg(bin) {
    let acc;
    function rec(n) {
        if (n === undefined) {
            return acc;
        }
        if (acc === undefined) {
            acc = n;
        } else {
            acc = bin(acc, n);
        }
        return rec; // returnsion
    }
    return rec;
}

function mul(a, b) {
    return a * b;
}

console.log(liftg(mul)()); // undefined
console.log(liftg(mul)(3)()); // 3
console.log(liftg(mul)(3)(0)(4)()); // 0
console.log(liftg(mul)(1)(2)(4)(8)()); // 64

