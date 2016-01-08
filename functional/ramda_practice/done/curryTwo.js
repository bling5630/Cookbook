var curry_1 = require('./curryOne');
var isPlaceholder = require('./isPlaceholder');

module.exports = function curryTwo(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return isPlaceholder(a) ? f2
              : curry_1(function(_b) {
                return fn(1, _b);
              });
      default:
        return isPlaceholder(a) && isPlaceholder(b) ? f2
        : isPlaceholder(a) ? curry_1(function(_a) { return fn(_a, b); })
        : isPlaceholder(b) ? curry_1(function(_b) { return fn(a, _b); })
        : fn(a, b);    }
  };
};
