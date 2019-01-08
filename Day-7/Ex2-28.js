function add(a, b) {
    return a + b;
}

function addg(num){
    let acc;
    if(num === undefined){
        return acc;
    }
    else{
        acc = num;
        return (nump) => {
            if(nump === undefined){
                return acc;
            }
            else{
                acc +=nump;
                return addg(acc);
            }
        }
    }
}


console.log(addg()); // undefined
console.log(addg(2)()); // 2
console.log(addg(2)(7)()); // 9
console.log(addg(3)(0)(4)()); // 7
console.log(addg(2)()); // 2
