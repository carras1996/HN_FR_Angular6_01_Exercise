function binarySearch(arr, number) {
    debugger;
  let min = arr[0];
  let max = arr[arr.length - 1];

  while (max > min) {
    debugger;
    let mid = min + Math.floor((max - min) / 2);
    if (number === mid) {
      return true;
    }
    if (mid < number) {
      min = mid + 1;
    //   max = max;
    }
    else{
        // min = min;
        max = mid ;
    }
  }
  if(min === number){
    return true;
  }
  return false;
}

console.log(binarySearch([1,2,3,4,5,6,8,12,18,21], 9));
