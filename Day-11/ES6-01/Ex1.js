(function IIFE() {
  debugger;
  function foo(x) {
    var y = x * 2; //

    return  (z) => {
      if (z.length > 3) {
        return z.map(function baz(v) {
          if (v > 3) return v + y; //4,6 => 8,10
          else return baz(v * 4); //baz(4), baz(12) => 8,16 => [8,16,8,10]
        });
      } else {
        var obj = [];

        setTimeout(
           () => {
            obj.length = 1;
            obj[0] = this.w;
            console.log(this);
          },
          100
        );

        return obj;
      }
    };
  }

  var p = foo(2); // y =4 return bar
  var list1 = [1, 3, 4];
  var list2 = list1.concat(6); // [1,3,4,6]

  list1 = p.call({ w: 42 }, list1); // obj = []
  list2 = p(list2); //=> [8,16,8,10]
  
  setTimeout(function() {
    console.log(
      list1[0] ===
        list2.reduce((s, v) => {
          return s + v;
        }, 0)
    );
  }, 200);
})();

