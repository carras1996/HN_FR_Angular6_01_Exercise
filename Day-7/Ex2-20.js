function fromTo(first, last) {
    return () => {
        let result = first++;
        if (result < last) {
            return result;
        }
        else return undefined;
    };
}

function concat(func1, func2){
    return () => {
        let result = func1();
        if(result !== undefined){
            return result;
        }
        else{
            result = func2();
            return result;
        }
    }

}
var con = concat(fromTo(0, 3), fromTo(0, 2));
console.log(con());
console.log(con());
console.log(con());
console.log(con());
console.log(con());
console.log(con());
