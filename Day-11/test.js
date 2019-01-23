function binarySearch(arr, number) {
    debugger;
  let min = arr[0];
  let max = arr[arr.length - 1];

  while (max > min) {
    let mid = (min + max) / 2;
    if (number === mid) {
      return true;
    }
    if (mid < number) {
      min = mid;
    //   max = max;
    }
    else{
        // min = min;
        max = mid;
    }
  }
  return false;
}

console.log(binarySearch([1,2,3,4,5,6,8,12,18,21], 20));
