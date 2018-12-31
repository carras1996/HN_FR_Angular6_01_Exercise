function swap(itemA, itemB) {
    let temp = itemA;
    itemA = itemB;
    itemB = temp;
}
function changeColRow(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            // swap(arr[i][j], arr[j][i]); 
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }
    return arr;
}

function reverseMatrix(arr) {
    debugger;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length / 2; j++) {
            // swap(arr[i][j], arr[i][arr.length - 1 - j]);
            let temp = arr[i][j];
            arr[i][j] = arr[i][arr.length - 1 - j];
            arr[i][arr.length - 1 - j] = temp;
        }
    }
    return arr;
}
function rotateMatrix(arr) {
    changeColRow(arr);
    reverseMatrix(arr);
    return arr;
}
var M = rotateMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]);

console.log(M);