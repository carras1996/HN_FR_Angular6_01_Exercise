function reverseArray(array){
    let result = [];
    for(let i = array.length - 1; i>= 0; i--){
        result.push(array[i]);
    }

    return result;
}

console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(array){
    let key, point;
    if(array.length % 2 === 0){
        point = array.length/2 - 1;
        for(let i = 0; i<= point; i++){
            key = array[i];
            array[i] = array[array.length - 1 -i];
            array[array.length - 1 -i] = key;
        }
    }
    if(array.length%2 === 1){
        point = (array.length - 1)/2;
        for(let i = 0; i< point; i++){
            key = array[i];
            array[i] = array[array.length - 1 -i];
            array[array.length - 1 -i] = key;
        }
    }
    

    return array;
}
let arrayValue = [1,2,3,4,5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);