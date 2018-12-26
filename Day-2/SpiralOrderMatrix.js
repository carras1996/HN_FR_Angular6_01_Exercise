

var count = 0;
    
function topRight(matrix, x1, y1, x2, y2){
    for(let i = x1; i<= x2; i++ )
        matrix[y1][i] = count++;
    for(let i  = y1+1; i<= y2; i++ )
        matrix[i][x2] = count++;
    if(x2-x1> 0 && y2-y1 > 0 ) {
        y1++;
        x2--;
        bottomLeft(matrix,x1,y1,x2,y2);
    }
}

function bottomLeft(matrix,x1,y1,x2,y2){
    for(let i = x2; i>= x1; i-- )
        matrix[y2][i] = count++;
    for(let i = y2-1; i>= y1; i--)
        matrix[i][x1] = count++;
    if(x2-x1 > 0 && y2-y1 > 0 ){
        y2--;
        x1++;
        topRight(matrix,x1,y1,x2,y2);
    }
}

function main(m,n){
    var matrix = new Array(m);
    for (var i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(n);
    }
    topRight(matrix,0,0,n-1,m-1);
    return matrix;
}

console.log(main(6,4));