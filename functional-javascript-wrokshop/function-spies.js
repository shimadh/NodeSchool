// program to spy a function by overidding the method and maintaining original function

module.exports = spyCount = (target, method) => {
  var originalFunction = target[method]; // cloning original behaviout
  var reuslt = { count: 0 }; // counter variable to track spy call

  target[method] = function() {
    reuslt.count++;
    return originalFunction.apply(this, arguments); // applying arguments binding to this
  };

  return reuslt;
};
