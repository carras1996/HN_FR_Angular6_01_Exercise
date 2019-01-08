

function gensymf(str) {
    let result = 0;
    return () => {
        
        result++;

        return str+result;
    }
}

var genG = gensymf('G');
var genH = gensymf('H');
console.log(genG()); 
console.log(genG()); 
console.log(genH()); 
console.log(genH()); 
