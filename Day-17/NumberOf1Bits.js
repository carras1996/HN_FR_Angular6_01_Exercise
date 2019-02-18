function binaryRepresentation(number){
    let res = [];
    while( number > 0){
        res.unshift(number%2);
        number = Math.floor(number/2);
    }
    let length = res.length;
    for(let i = 0; i < 32 - length; i++){
        res.unshift(0);
    }
    // console.log(res.length);
    return res.join('');
}

function numberOf1Bits(number){
    return binaryRepresentation(number).split('').filter(x => x === '1').length;
}

console.log(numberOf1Bits(11));