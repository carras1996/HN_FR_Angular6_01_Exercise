function powerOfTwoIntergers(number){
    debugger;
    if(number < 4){
        return false;
    }
    else {
        for(let x = 2; x<= Math.sqrt(number); x++){
            let p = x;
            while(p <= number){
                p *= x;
                if( p === number){
                    return true;
                }
            }
        }
        return false;
    }
}

console.log(powerOfTwoIntergers(100));