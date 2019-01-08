// function caculateNumberCol(arr){
//     return arr.reduce(function(accumulator, currentValue, currentIndex){
//         accumulator.push(`${currentValue}->${currentIndex+1}`);
//         return accumulator;
//     },[]);
// }

// console.log(caculateNumberCol(['A','B','C','D','E','F']));
// let str = "A"

// console.log(str.charCodeAt(0));

function indexChar(str,i){
    return str.charCodeAt(i) - 64;
}
console.log(indexChar('B'));

function indexCol(str){
    debugger;
    let index = 0;
    let arr = str.split('');
    for(let i = 0; i<arr.length; i++){
        index += indexChar(str,i)*Math.pow(26,arr.length-1-i);
    }
    return index;
}

console.log(indexCol('BZA'));

