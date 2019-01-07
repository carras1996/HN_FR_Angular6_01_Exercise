
var i = 0;
function element(array, func) {
    return () => {
        if(func === undefined){
            
            return array[fromTo(i++,array.length)()];
        }
        return array[func()];
    }
}

function fromTo(first, last) {
    return () => {
        let result = first++;
        if (result < last) {
            return result;
        }
        else return undefined;
    };
}

var ele = element([1, 2, 3, 4,5]);
console.log(ele());
console.log(ele());
console.log(ele());
console.log(ele());
console.log(ele());
console.log(ele());