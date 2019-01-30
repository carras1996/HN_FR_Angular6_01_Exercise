function findLPS(str){
    let j = 0;
    let i = 1;
    let strArr = str.split('');
    let lpsArr = [0];
    while(i < strArr.length){   
        if( strArr[i] === strArr[j] ){
            lpsArr.push(j+1);
            i++;
            j++;
        }
        else{
            if( j === 0 ){
                lpsArr.push(j);
                i++;
            }
            else{
                j = lpsArr[j - 1];
            }
        }
    }
    return lpsArr;
}

// console.log(findLPS('abcdabca'));
// console.log(findLPS('abcdabeabf'));
// console.log(findLPS('abcdeabfabc'));
// console.log(findLPS('aabcadaabe'));
// console.log(findLPS('ababd'));

function seachString(text, pattern){
    debugger;
    let i = 0;
    let j = 0;
    let textArr = text.split('');
    let patternArr = pattern.split('');
    patternArr.unshift('empty');
    let lpsArr = findLPS(pattern);
    if(text.length < pattern.length){
        return -1;
    }
    else{
        while(i < textArr.length){
            if( textArr[i] === patternArr[j+1]){
                i++;
                j++;
            }
            else{
                if(j !== 0){
                    j = lpsArr[j - 1];
                }
                else{
                    i++;
                }
                
            }

            if(j === patternArr.length - 1){
                return i - pattern.length + 1;
            }
        }
        return -1;
    }
}

console.log(seachString('ababcabcabababd', 'ababd'));