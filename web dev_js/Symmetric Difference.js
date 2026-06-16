function diffArray (arr1, arr2) {
  const newArr = [];
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}
/*function diffArray(arr1, arr2) {
  const newArr = arr1.filter(item => !arr2.includes(item));

  const extra = arr2.filter(item => !arr1.includes(item));

  return newArr.concat(extra);
}*/