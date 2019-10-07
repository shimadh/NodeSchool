// program to get short messages less than 50 chacters

module.exports = shortMessage = messages => {
  return messages.filter(m => m.message.length < 50).map(m => m.message);
};
