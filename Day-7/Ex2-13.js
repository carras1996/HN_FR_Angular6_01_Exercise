function from(arg){
    return () => {
        return arg++;
    };
}

var index = from(0);

console.log(index());
console.log(index());
console.log(index());
