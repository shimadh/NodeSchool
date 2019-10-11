//program to blocking event loop by using recusion
// with asynchronous setTimeout function. timeout duration is 100 milliseconds

module.exports = repeatProcess = (operation, num) => {
  if (num <= 0) return;
  operation();

  // check timeout
  if (num % 10 === 0) {
    setTimeout(function() {
      repeatProcess(operation, --num);
    });
  } else {
    repeatProcess(operation, --num);
  }
};
