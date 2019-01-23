function foo(...a) {
    let res = a.filter((num) => (num > 6 || num < 4));
    return res;
}

function bar() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];
    
  let a = [...a1, ...a2];

  return foo(...a);
}

// DO NOT MODIFY BELOW CODE
console.log(bar().join('') === '281012');
// true

