

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

