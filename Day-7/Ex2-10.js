function double(arg){
    return arg + arg;
}

function square(arg){
    return arg*arg;
}

function composeu(func1, func2){
    return (arg) => {
        return func2(func1(arg));
    }
}


console.log(composeu(double, square)(5));

