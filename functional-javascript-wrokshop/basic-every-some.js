// program to output valid users

module.exports = checkValidUsers = users => submittedUsers => {
  return submittedUsers.every(submittedUser =>
    users.some(user => user.id === submittedUser.id)
  );
};
