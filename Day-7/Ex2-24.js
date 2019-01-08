function counter(number){
    return {
        up: () => {
            return ++number;
        },
        down: () => {
            return --number;
        }
    }
}

var obj = counter(10);
var up = obj.up;
var down = obj.down;

console.log(up());
console.log(down());
console.log(down());
console.log(up());
