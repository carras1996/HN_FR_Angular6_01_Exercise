function fromTo(first,last){
    return () => {
        let result = first++;
        if(result < last){
            return result;
        }
        else return undefined;
    };
}

var index = fromTo(0,3);
console.log(index());
console.log(index());
console.log(index());
console.log(index());