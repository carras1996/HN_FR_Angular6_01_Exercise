function identify(arg){
    return () => {
        return arg;
    }
}

var four = identify(4);

console.log(four());