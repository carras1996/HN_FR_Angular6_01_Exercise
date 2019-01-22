// Input: [1,3,5,6], 5
// Output: 2

// Input: [1,3,5,6], 2
// Output: 1

// Input: [1,3,5,6], 7
// Output: 4

// Input: [1,3,5,6], 0
// Output: 0

function binarySearch(arr, min,max, number){
    debugger;
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

function searchElement(arr, number){
    var max = arr.length - 1;
    var min = 0;
    return binarySearch(arr,min, max, number);
}

console.log(searchElement([1,3,5,6], 5));
console.log(searchElement([1,3,5,6], 2));
console.log(searchElement([1,3,5,6], 7));
console.log(searchElement([1,3,5,6], 0));