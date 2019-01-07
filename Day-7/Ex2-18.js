function fromTo(first, last) {
    return () => {
        let result = first++;
        if (result < last) {
            return result;
        }
        else return undefined;
    };
}

function collect(func, array){
    return () => {
        let ele = func();
        if(ele !== undefined){
            array.push(ele);
        }
        return array[ele];
    }
}

var array = [];
var col = collect(fromTo(0, 2), array);
console.log(col());
console.log(col());
console.log(col());
console.log(array);

