function sumFibs(n) {
  let a = 1, b = 1, sum = 0;
  while (a <= n) {
    if (a % 2 !== 0) {
      sum += a;
    }
    [a, b] = [b, a + b];
  }
  return sum;
}