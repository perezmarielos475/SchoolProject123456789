function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1 || n === 2) return 1;

  let a = 0;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}

console.log(fibonacci(10));
