function verifyPrime(number){
    debugger;
    if(number < 2){
        return false;
    }
    else{
        for(let i = 2; i <= Math.sqrt(number); i++){
            if(number % i === 0){
                return false;
            }
        }
        return true;
    }
}

function primeNumbers(numberN){
    let result = [];
    if(numberN < 2){
        return [];
    }
    else{
        for(let i = 0; i<= numberN; i++){
            if(verifyPrime(i)){
                result.push(i);
            }
        }
        return result;
    }
}


console.log(primeNumbers(14));