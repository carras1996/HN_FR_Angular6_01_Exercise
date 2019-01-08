function add(a, b) {
    return a + b;
}

function revocable(func){
    return {
        invoke: (a,b) => {
            return func(a,b);
        },
        revoke: () => {
            return !this.flag;
        }
        
    }
}

var rev = revocable(add);
var addRev = rev.invoke;

console.log(addRev(3, 4)); // 7
rev.revoke();
console.log(addRev(3, 4)); // undefined
