function getIndexToIns (arr, num) {
  arr.sort((a, b) => a - b);
  arr.findIndex(element => element >= num);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}