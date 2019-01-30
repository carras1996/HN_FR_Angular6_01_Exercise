function reverseStr(str){
    return str.trim().split(' ').filter( element => element !== '').reverse().join(' ');
}

console.log(reverseStr('the       sky      is      blue     '));