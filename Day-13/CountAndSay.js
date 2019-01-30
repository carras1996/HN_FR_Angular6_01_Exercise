function Say(n){
    if (n <= 0){
        return 0;
    }
    if (n === 1){
        return 1;
    }
    else{
        return Count(Say(n-1));
    }
}

function Count(number){
    debugger;
    let arr = String(number).split('');
    let resArr = []
    let count = 1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            count = count + 1;
        }
        else{
            resArr.push([count, arr[i]]);
            count = 1;
        }
    }
    return resArr.join('').split(',').join('');
}

console.log(Say(5));
