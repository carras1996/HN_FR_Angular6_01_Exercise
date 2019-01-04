// function arrToStr(array) {
//     return array.map(i => i.toString());
// }

// function maxChar(array, i) {
//     let max = '0';
//     for (let x of array) {
//         if (max <= x[i]) {
//             max = x[i];
//         }
//     }
//     return max;
// }

// function findA(array, i) {
//     let arrA = [];
//     for (let x of array) {
//         if (x[i] === maxChar(array, i)) {
//             arrA.push(x);
//         }
//     }
//     return arrA;
// }

// function findB(arrB, array, i) {
//     for (let x of array) {
//         if (x[i] < maxChar(array, i)) {
//             arrB.push(x);
//         }
//     }
//     return arrB;
// }

// function findRes(array, i) {
//     let res = '';
//     for (let x of array) {
//         if (x[i - 1] === maxChar(array, i - 1) && x[i] === undefined) {
//             res += x;
//         }
//     }
//     return res;
// }

function largestNumber(array) {
    //   debugger;
    // array = arrToStr(array);
    // let arrA = array;
    // let arrB = [];
    // let result = '';
    // let i = 0;
    // while (!(arrA.length === 0 && arrB.length === 0)) {
    //     arrB = findB(arrB, arrA, i);
    //     result += findRes(arrA, i);
    //     arrA = findA(arrA, i);
    //     if (arrA.length === 1) {
    //         result += arrA[0];
    //         arrA = arrB;
    //         arrB = [];
    //         i = 0;
    //     }
    //     i++;
    // }
    // return result;
    return array.sort(function(a,b){
        return ( - Number(`${a}${b}`) + Number(`${b}${a}`));
    }).join('');
}

var M = largestNumber([3, 30, 34, 5, 9]);
console.log(M)

