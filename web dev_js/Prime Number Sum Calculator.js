function sumPrimes(num) {
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}