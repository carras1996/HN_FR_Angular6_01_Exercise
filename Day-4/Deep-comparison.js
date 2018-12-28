function deepEqual(obj1, obj2){
    if(obj1 === obj2){
        return true;
    }
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);
    if(key1.length === key2.length){
        let flagKey = true;
        for(let i = 0; i< key1.length; i++){
            if(key1[i] !== key2[i]){
                flagKey= false;
            }
            else{
                if(typeof obj1[key1[i]] === 'object' && typeof obj2[key2[i]] === 'object' ){
                    deepEqual(obj1[key1[i]],obj2[key2[i]]);
                }
                else{
                    if(obj1[key1[i]] !== obj2[key2[i]]){
                        flagKey = false;
                    }
                }
            }
        }
        if(flagKey === false){
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
