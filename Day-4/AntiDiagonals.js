function antiDiagonals(array){
    let result = [];
    let count = 0;

    let d = array.length * 2 - 2;

    while (count <= d) {
        let eleResult = [];
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if ((i + j) === count) {
                    eleResult.push(array[i][j]);
                }
                if (i + j > count) {
                    continue;
                }
            }
        }
        result.push(eleResult);
        count++;
    }
    return result;
}

console.log(antiDiagonals([ [1, 2, 3],[4, 5, 6],[7, 8, 9]]));