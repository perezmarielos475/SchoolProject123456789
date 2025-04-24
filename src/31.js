function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNumber = getRandomInteger(0, 100);
console.log(randomNumber); // Output a random number between 0 and 100
