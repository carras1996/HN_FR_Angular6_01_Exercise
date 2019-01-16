


function createMatrix(m,n){
    let matrix = new Array(m);
    for (var i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(n);
    }
    return matrix;
}

function matrixProduct(matrix){
    debugger;
    if(matrix.length === 0 || matrix[0].length === 0){
        return 0;
    }

    let maxMatrix = createMatrix(matrix.length, matrix[0].length);
    let minMatrix = createMatrix(matrix.length, matrix[0].length);

    for(let i = 0; i< matrix.length; i++){
        for(let j = 0; j< matrix[0].length; j++){
            let max = -Infinity;
            let min = Infinity;
            if(i === 0 && j === 0){
                max = matrix[i][j];
                min = matrix[i][j];
                continue;
            }
            if( i > 0){
                let tempMax = Math.max(matrix[i][j]*maxMatrix[i-1][j], matrix[i][j]*minMatrix[i-1][j] );
                max = Math.max(tempMax,max);
                let tempMin = Math.min(matrix[i][j]*maxMatrix[i-1][j], matrix[i][j]*minMatrix[i-1][j] );
                min = Math.min(tempMin,min);
            }
            if( j > 0){
                let tempMax = Math.max(matrix[i][j]*maxMatrix[i][j-1], matrix[i][j]*minMatrix[i][j-1] );
                max = Math.max(tempMax,max);
                let tempMin = Math.min(matrix[i][j]*maxMatrix[i][j-1], matrix[i][j]*minMatrix[i][j-1] );
                min = Math.min(tempMin,min);
            }

            maxMatrix[i][j] = max;
            minMatrix[i][j] = min;
        }
    }
    return maxMatrix[maxMatrix.length-1][maxMatrix[0].length-1];
}

console.log(matrixProduct([[-1, 2, 3],
    [4, 5, -6],
    [7, 8, 9]]));