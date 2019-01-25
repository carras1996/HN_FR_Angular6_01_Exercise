function calcFibonaci(n){
    let listRes = new Map();
    listRes.set(0,0);
    listRes.set(1,1);
    listRes.set(2,1);
    for(let i = 3; i <= n; i++){
        listRes.set(i,listRes.get(i-1) + listRes.get(i-2));
    }
    return listRes.get(n);
}

console.log(calcFibonaci(6));