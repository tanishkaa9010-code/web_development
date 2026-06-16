function uniteUnique(arr1, arr2,...args) {
    let combinedArray = arr1.concat(arr2, ...args );
    let uniqueArray = [];
    for (let i = 0; i < combinedArray.length; i++) {
        if (uniqueArray.indexOf(combinedArray[i]) === -1) {
            uniqueArray.push(combinedArray[i]);
        }
    }
    return uniqueArray;
}
console.log(uniteUnique([1, 2, 3], [3, 4, 5],[5, 6, 7], [7, 8, 9])); 