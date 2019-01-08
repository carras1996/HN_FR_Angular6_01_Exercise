function factorial(number){
    if(number === 1){
        return 1;
    }
    else{
        return number*factorial(number -1);
    }
}

// console.log(factorial(25));

// function zerosNumber(number){
//     var count = 0;
//     for(let i of number.toString().split('')){
//         if(i==='0'){
//             count ++;
//         }
//     }

//     return count;
// }
function zerosNumber(number){
    debugger;
    var count = 0;
    var i = 1;
    while(Math.pow(5,i) <= number){
        count += Math.floor(number / Math.pow(5,i));
        i++;
    }
    return count;
}



console.log(zerosNumber(125));