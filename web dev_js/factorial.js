let num = 15;
function factorialCalculator(n) {
    let result = 1;
    for (let i = 1; i<=n; i=i+1) {
        result = result * i;
    }
    return result;

}
factorial=factorialCalculator(num);
console.log(`Factorial of ${num} is ${factorial}`)