function addf(a) {
    return (b) => {
        return a + b;
    }
}
var inc = addf(0);

function gensymff(func, num) {
    return (str) => {
        let result = func(num);
        return () => {
            result++;
            return str + result;
        }
    }
}


var gensymf = gensymff(inc, 0);
var genG = gensymf('G');
var genH = gensymf('H');
console.log(genG());
console.log(genG());
console.log(genH());
console.log(genH()); 
