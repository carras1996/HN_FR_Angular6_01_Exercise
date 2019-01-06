function mapMethod(array, callback) {
  let result = [];
  for (let i of array) {
    i = callback(i);
    result.push(i);
  }
  return result;
}

function mapFunc(i) {
  return i * i;
}

console.log(mapMethod([1, 2, 3, 4, 5, 6], mapFunc));
