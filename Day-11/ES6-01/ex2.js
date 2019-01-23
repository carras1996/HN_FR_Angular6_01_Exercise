var x = 2,
fns = [];

(function() {
    debugger;
    var j = x
    x = 5;
    function run() {
        return j * 2;
    }
  for (var i = 0; i < x; i++) {
    if (i === (j * 2) ) {
        fns[i] = run;
    }
  }
  x = j;
//   console.log(x);
})();

// DO NOT MODIFY BELOW CODE
console.log(x * 2 === fns[x * 2]());
// true
