 function smallestCommons (arr) {
  arr.sort((a, b) => a - b);
  const [min, max] = arr;
  let lcm = max;
  while (true) {
    let divisibleByAll = true;
    for (let i = min; i <= max; i++) {
      if (lcm % i !== 0) {
        divisibleByAll = false;
        break;
      }}
    if (divisibleByAll) {
      return lcm;
    }
    lcm++;
  }
}