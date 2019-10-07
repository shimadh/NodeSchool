// program to count the number of arguments passed thats hasOwnProperty of an object

module.exports = function argsCount() {
  return Array.prototype.filter.call(arguments, function(arg) {
    return Object.prototype.hasOwnProperty.call(arg, "quack");
  }).length;
};
