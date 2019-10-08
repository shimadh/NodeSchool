// program to log namespaced strings using partially function, bind

module.exports = namespace => {
  return console.log.bind("console", namespace);
};
