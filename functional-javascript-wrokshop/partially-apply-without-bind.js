// program to log namespaced strings for the first arguments using partially function, apply, call, slice

var slice = Array.prototype.slice;

module.exports = logger = namespace => {
  return function() {
    console.log.apply("console", [namespace].concat(slice.call(arguments)));
  };
};
