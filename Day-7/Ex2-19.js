function fromTo(first, last) {
    return () => {
        let result = first++;
        if (result < last) {
            return result;
        }
        else return undefined;
    };
}

function filter(func1, callback) {
    return () => {
        let count = func1();
        if (callback(count)) {
            return count;
        }
        else {
            count = func1();
            return count;
        }
    };
}

var fil = filter(fromTo(0, 5), function even(value) {
        return (value % 2) === 0;
    });


console.log(fil());
console.log(fil());
console.log(fil());
console.log(fil());
// console.log(fil());
// console.log(fil());


