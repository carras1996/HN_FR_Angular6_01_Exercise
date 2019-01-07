function mapMethod(array, func) {
  let result = [];
  for (let i of array) {
    i = func(i);
    result.push(i);
  }
  return result;
}

function mapFunc(a) {
  return a + 10;
}

function mapFunc1(a) {
  return 1;
}

console.log(mapMethod([1, 2, 3, 4, 5, 6], mapFunc1));
