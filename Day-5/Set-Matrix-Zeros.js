function setMatrixZeros(arr) {
    debugger;
    let storeCol = [];
    let storeRow = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] === 0) {
                storeCol.push(j);
                storeRow.push(i);
            }
        }
    }
    for (let i = 0; i < storeRow.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            arr[storeRow[i]][j] = 0;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < storeCol.length; j++) {
            arr[i][storeCol[j]] = 0;
        }
    }
    return arr;
}
var M = setMatrixZeros([
    [1, 0, 1],
    [1, 1, 1],
    [1, 1, 1]
]);
console.log(M);









