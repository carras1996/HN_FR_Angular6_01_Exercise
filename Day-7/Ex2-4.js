function addf(a){
    return (b) => {
        return a+ b;
    }
}

console.log(addf(3)(4));