// program to repeat function calls

module.exports = repeat = (operation, num) => {
  if (num <= 1) return;
  operation();
  return repeat(operation, num - 1);
};
