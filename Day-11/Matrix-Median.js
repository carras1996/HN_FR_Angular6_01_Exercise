
function binarySearch(arr, min,max, number){
    var mid = Math.floor((min + max)/2);
    if(max < min){
        return mid + 1;
    }
    if(arr[mid] === number){
        return mid;
    }
    else if(arr[mid] < number){
        min = mid + 1;
        max = max;
        return binarySearch(arr, min, max, number);
    }
    else{
        max = mid - 1;
        min = min;
        return binarySearch(arr, min, max, number);
    }
}

function findMedianMatrix(matrix){
    debugger;
    var minVal = Infinity;
    var maxVal = -Infinity;
    for (let i = 0; i < matrix.length; i++) {
        maxVal = Math.max(maxVal, matrix[i][matrix[0].length - 1]);
        minVal = Math.min(minVal, matrix[i][0]);
    }
    var mid = Math.floor((matrix[0].length * matrix.length)/2);
    let count;
    let current;
    for(let i = minVal; i<=maxVal; i++){
        count = 0;
        current = 0;
        for(let j = 0; j< matrix.length; j++){
            if(matrix[j].includes(i)){
                current++;
               
            }
            count = count + binarySearch(matrix[j], matrix[j][0], matrix[j][matrix[j].length - 1],i);
            if(count === mid && current !== 0){
                return i;
            }
        }
    }
}

console.log(findMedianMatrix([[1, 3, 5], [2, 6, 9], [3, 6, 9]]));




