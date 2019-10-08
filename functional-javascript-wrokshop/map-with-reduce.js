// program to output result map with reduce

module.exports = (arr, fn) => {
  var result = [];
  arr.reduce((acc, curr) => {
    result.push(fn(curr));
  }, []);
  return result;
};
