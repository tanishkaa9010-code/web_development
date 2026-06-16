function chunkArrayInGroups(arr, num) {
  let newarr = [];

  for (let i = 0; i < arr.length; i += num) {
    newarr.push(arr.slice(i, i + num));
  }

  return newarr;
}

console.log(chunkArrayInGroups([1, 2, 3, 4], 2));
