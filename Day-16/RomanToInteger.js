// viết hàn convert từ ký tự roman đơn sang số 

function singleRomanToNumber(character){
    switch(character){
        case 'I': {
            return 1;
        }
        case 'V': {
            return 5;
        }
        case 'X': {
            return 10;
        }
        case 'L': {
            return 50;
        }
        case 'C': {
            return 100;
        }
        case 'D': {
            return 500;
        }
        case 'M': {
            return 1000;
        }
        default: {
            return undefined;
        }
    }
}

// hàm convert chuỗi roman sang mảng số
function romanToArr(roman){
    return roman.split('').map(x => singleRomanToNumber(x));
}


// hàm convert chuỗi roman sang số tự nhiên
function romanToNumber(roman){
    let arr = romanToArr(roman);
    if(arr.includes(undefined)){
        return undefined;
    }
    for(let i = 0; i<arr.length; i++){
        if(arr[i] < arr[i+1]){
            if((arr[i] === 1 && (arr[i+1] === 5 || arr[i+1] === 10)) || (arr[i] === 10 && (arr[i+1] === 50 || arr[i+1] === 100)) || (arr[i] === 100 && (arr[i+1] === 500 || arr[i+1] === 1000))){
                arr[i] = -arr[i];
            }
            else return undefined;
        }
}
    return arr.reduce(function(acc, crr){
        return acc + crr;
    },0);
}

console.log(romanToNumber('MLXVI'));