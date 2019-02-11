function createMatrix(n){
    let matrix = [];
    for(let i=0; i<n; i++) {
        matrix[i] = new Array();
    }
    return matrix;
}

console.log(createMatrix(3))

function convertZigzagStr(text, numRow) {
     let count = 0;
     let matrix = createMatrix(numRow);
     console.log(matrix);
     let row = 0;
     let way = true // di xuong
     while(count < text.length){
        matrix[row].push(text[count]);
        count ++;
        if(way){
            row++;
        }
        else{
            row--;
        }
        if(row === numRow){
            way = false;
        }
        if(row === 0){
            way = true;
        }
     }
     return matrix;
}

console.log(convertZigzagStr('PAYPALISHIRING',3));