function pairElement (str) {
  // create an object to hold the pairs
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };
  // create an array to hold the pairs
  const result = [];
  // iterate through the string
  for (let i = 0; i < str.length; i++) {
    // push the pair to the result array
    result.push([str[i], pairs[str[i]]]);
  }
  // return the result array
  return result;
}
console.log(pairElement("GCG"));