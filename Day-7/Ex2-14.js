function from(arg){
    return () => {
        return arg++;
    };
}

function to(func, count){
    return () => {
        let result = func();
        if(result < count){
            return result;
        }
        return undefined;
    }
}
var index = to(from(1), 3);
console.log(index()); 
console.log(index()); 
console.log(index()); 
console.log(index());

