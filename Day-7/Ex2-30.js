function arrayg(number){
    let acc = [];
    if(number === undefined){
        return acc;
    }
    else{
        acc.push(number);
        return function callback(nump){
            if(nump === undefined){
                return acc;
            }
            else{
                acc.push(nump);
                return callback;
            }
        }
    }
}

console.log(arrayg());
console.log(arrayg(3)(4)());
console.log(arrayg(3)(4)(5)());