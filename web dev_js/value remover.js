function destroyer (arr) {
  var args = Array.prototype.slice.call(arguments);
  var array = args.shift();
  return array.filter(item => !args.includes(item));
}