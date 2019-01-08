function add(a, b) {
    return a + b;
}

// function revocable(func){
    
//     return {
//         disable: false,
//         invoke: (a,b) => {
//             if(this.disable){
//                 return func(a,b);
//             }
//         },
//         revoke: () => {
//             this.disable = !this.disable;
//         }
        
//     }
// }
function revocable(func){
    let disable = true;
    return {
        invoke: (a,b) => {
            if(disable){
                return func(a,b);
            }
        },
        revoke: () => {
            disable = !disable;
        }
        
    }
}

var rev = revocable(add);
var addRev = rev.invoke;

console.log(addRev(3, 4)); // 7
rev.revoke();
console.log(addRev(3, 4)); // undefined
rev.revoke();
console.log(addRev(3, 4));
