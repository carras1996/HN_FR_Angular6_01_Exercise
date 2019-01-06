function sum(array){
    return array.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    },0);
}

console.log(sum([1,2,3,4,5,6]));

function reverse(array){
    return array.reduce(function(accumulator, currentValue){
        accumulator.unshift(currentValue);
        return accumulator;
    },[]);
}
console.log(reverse([1,2,3,4,5,6]));


function product(array){
    return array.reduce(function(accumulator, currentValue){
        return accumulator*currentValue;
    },1);
}
console.log(product([1,2,3,4,5,6]));
