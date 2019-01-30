function isPalindrome(str) { 
    let strlength = str.length; 

    for (let i = 0, j = strlength - 1; i <= j; i++, j--) { 
        if (str.charCodeAt(i) !== str.charCodeAt(j)) { 
            return false; 
        } 
    } 
    return true; 
} 
// console.log(isPalindrome('aaaaeceaaaaa'));

function countCharacter(str) { 
    debugger;
    let count = 0;
    while (str.length > 0) {
        if (isPalindrome(str)) { 
            break; 
        } else { 
            count++;
            str = str.substring(0, str.length - 1);
        } 
    } 
    return count;
} 

console.log(countCharacter('AACECAAAA'));
