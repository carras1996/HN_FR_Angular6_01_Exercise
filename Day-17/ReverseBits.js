
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

function decimaRepresentation(bits){
    return bits.split('').reduce(function(acc, crrVal, crrIndex){
        return acc + crrVal*Math.pow(2, bits.length - 1 - crrIndex);
    },0)
    
}

function reverseBits(number){
    let bits = binaryRepresentation(number);
    // console.log(bits);
    // console.log(bits.split('').reverse().join(''));
    return decimaRepresentation(bits.split('').reverse().join(''))
}

console.log(reverseBits(3));
