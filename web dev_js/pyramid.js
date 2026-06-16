function pyramid(str, n, bool) {
    let result = "\n";
    for (let i = 0; i < n; i++) {

        if (bool == true) {
            result += " ".repeat(i ) + str.repeat(2 * (n - i) - 1) + "\n";
        } else {
            result += " ".repeat(n - i - 1) + str.repeat(2 * (i + 1) - 1) + "\n";
        }
    }
    return result;
}
console.log(pyramid("A", 5, true));
