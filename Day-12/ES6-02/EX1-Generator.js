var numbers = {
    // val1: 1,
    // val2: 2,
    // val3: 3
    *[Symbol.iterator]() {
        for(let i = 0; i <= 100; i++){
            yield i;
        }
    }
};
var numbers2 = {
    // val1: 1,
    // val2: 2,
    // val3: 3
    *[Symbol.iterator]() {
        for(let i = 6; i <= 30; i += 4){
            yield i;
        }
    }
};
// numbers[Symbol.iterator] = function(){

//     // get the properties of the object 
//     let properties = Object.keys(this);
//     let count = 0;
//     // set to true when the loop is done 
//     isDone = false;

//     // define the next method, need for iterator 
//     let next = () => {
//        // control on last property reach 
//        if(count >= properties.length){
//           isDone = true;
//        }
//        return {done:isDone, value: this[properties[count++]]};
//     }

//     // return the next method used to iterate 
//     return {next};
//  };

// should print 0..100 by 1s
for (let num of numbers) {
    console.log(num);
}

// should print 6..30 by 4s
for (let num of numbers2) {
    console.log(num);
}
