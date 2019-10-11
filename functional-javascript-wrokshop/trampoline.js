// program to trampoline to continuously call itself synchronously.

const repeatProcess = (operation, num) => {
  if (num <= 0) return;

  return () => {
    operation();
    return repeatProcess(operation, --num);
  };
};

const trampoline = fn => {
  while (fn && typeof fn === Function) {
    fn = fn();
  }
  return fn;
};

module.exports = (operation, num) => {
  return trampoline(() => {
    return repeatProcess(operation, num);
  });
};
