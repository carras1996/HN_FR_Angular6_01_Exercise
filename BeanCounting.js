function countBs(str){
    var arrStr = str.split('');
    var count = 0;
    for(let i of arrStr){
        if(i==='B'){
            count++;
        }
    }
    return count;
}
console.log(countBs("BBC"));


function countChar(str, chr){
    var arrStr = str.split('');
    var count = 0;
    for(let i of arrStr){
        if(i === chr){
            count++
        }
    }
    return count;
}

console.log(countChar("kakkerlak", "k"));