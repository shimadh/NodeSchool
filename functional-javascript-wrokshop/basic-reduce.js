// program to count number of times each string occured.

module.exports = countWordOccured = words => {
  return words.reduce((countWordMap, word) => {
    countWordMap[word] = ++countWordMap[word] || 1;
    return countWordMap;
  }, {});
};
