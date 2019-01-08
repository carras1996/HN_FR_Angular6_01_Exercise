function factorial(number){
    if(number === 1){
        return 1;
    }
    else{
        return number*factorial(number -1);
    }
}

console.log(factorial(5));

function zerosNumber(number){
    var count = 0;
    for(let i of number.toString().split('')){
        if(i==='0'){
            count ++;
        }
    }

    return count;
}

console.log(zerosNumber(factorial(5)));