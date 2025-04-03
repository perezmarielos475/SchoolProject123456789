function calculateGCD(a, b) {
    if (!b) return a;
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

console.log(calculateGCD(15, 25));
