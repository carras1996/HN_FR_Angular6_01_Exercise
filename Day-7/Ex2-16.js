function fromTo(first, last) {
    return () => {
        let result = first++;
        if (result < last) {
            return result;
        }
        else return undefined;
    };
}

function element(array, func) {
    return () => {
        return array[func()];
    }
}

var ele = element([1, 2, 3, 4], fromTo(1, 3));
console.log(ele());
console.log(ele());
console.log(ele());