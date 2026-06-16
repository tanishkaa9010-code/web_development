function whatIsInAName (collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source); 
  for (var i = 0; i < collection.length; i++) {
    var obj = collection[i];
    var hasAllKeys = sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
    if (hasAllKeys) {
      arr.push(obj);
    }
  }
  return arr;
}