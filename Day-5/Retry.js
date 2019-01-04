class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    try {
        console.log(primitiveMultiply(a, b));
    } catch (error) {
        console.log(error.message);
    }
}
console.log(reliableMultiply(8, 8));
