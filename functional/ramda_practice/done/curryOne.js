var isPlaceholder = require('./isPlaceholder');

module.exports = function curryOne(fn) {
  return function f1(a) {
    if (arguments.length === 0 || isPlaceholder(0)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
};
