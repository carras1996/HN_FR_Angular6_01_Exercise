function fibonaccif(a,b){
    let count = a;
    let result = [];
    let ele = a;
    return () => {
        if(count === 0 || count === 1){
            ele = count;
            result.push(ele);
            count += b;
        }
        else{
            ele = result[count-1] + result[count-2];
            result.push(ele);
            count += b;
        }
        return result[result.length-1];
        
    }
}

var fib = fibonaccif(0, 1); // must by fibonaccif(0, 1)
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

