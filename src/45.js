function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  // Ensure that the value returned is within the range [min, max]
  if (max < min) {
    var temp = min;
    min = max;
    max = temp;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min; // The formula to get a random integer within a specified range
}
