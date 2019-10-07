// program to output words count using recursion fn

module.exports = countWords = (words, fn, initial) => {
  return (reduceOne = (index, value) => {
    if (index > words.length - 1) return value;
    return reduceOne(index + 1, fn(value, words[index], index, words));
  })(0, initial);
};
