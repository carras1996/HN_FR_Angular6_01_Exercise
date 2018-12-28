function range(a,b){
    let result = [];
    if(a>b){
        for(let i = a; i>= b; i--){
            result.push(i);
        }
    }
    else if(a< b){
        for(let i = a; i<= b; i++){
            result.push(i);
        }
    }
    else{
        result.push(a);
    }
    return result;
}

console.log(range(1,10));

function sum(arr){
    let sumArr = 0;
    for(let i of arr){
        sumArr += i;
    }
    return sumArr;
}

console.log(sum(range(1,10)));
