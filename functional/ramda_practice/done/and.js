var curryTwo = require('./curryTwo');

module.exports = curryTwo(function and(a, b) {
  return a && b;
  }
);
