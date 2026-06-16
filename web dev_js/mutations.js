function mutations(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();

  for (const char of second) {
    if (!first.includes(char)) {
      return false;
    }
  }

  return true;
}

console.log(mutations(["hello", "o"]));