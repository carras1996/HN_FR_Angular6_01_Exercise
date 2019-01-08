function binaryRepresentation(number){
    debugger;
    let res = [];
    while( number > 0){
        res.unshift(number%2);
        number = Math.floor(number/2);
    }
    return res.join('');
}

console.log(binaryRepresentation(6));

// 6/2 = 3 du 0
// 3/2 = 1 du 1
// 1/2 = 0 du 1