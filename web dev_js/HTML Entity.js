function convertHTML (str) {
  // create an object to hold the HTML entities
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  // iterate through the string and replace each entity
  for (let i = 0; i < str.length; i++) {
    if (entities[str[i]]) {
      str = str.replace(str[i], entities[str[i]]);
    }
  }
  // return the converted string
  return str;
}
console.log(convertHTML("Schindler's List"));