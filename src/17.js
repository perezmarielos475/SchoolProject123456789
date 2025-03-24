function calculateGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function sumTwoNumbers(a, b) {
    if (a < 0 || b < 0) {
        throw new Error('Both numbers must be non-negative');
    }

    const gcdValue = calculateGCD(Math.abs(a), Math.abs(b));
    if (gcdValue === 1) {
        return a + b;
    } else {
        let sum = Math.min(a, b);
        return (a - sum) * (b / gcdValue) + (sum - (a - sum)) * (Math.floor(b / gcdValue) || 0);
    }
}

console.log(sumTwoNumbers(-10, 2));
