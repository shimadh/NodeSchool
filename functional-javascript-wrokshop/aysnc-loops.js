// function to load all the loaded users using callback function

module.exports = loadUsers = (usersIds, callback, done) => {
  const users = [];
  const count = 0;
  usersIds.forEach((id, index) => {
    callback(id, function(data) {
      users[index] = data;
      ++count;
      if (count === users.length) return done(users);
    });
  });
};
