var curry_1 = require('./curryOne');
var curry_2 = require('./curryTwo');
var isPlaceholder = require('./isPlaceholder');

module.exports = function curryThree(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return isPlaceholder(a) ? f3
             : curry_2(function(_b, _c) { return fn(a, _b, _c); });
      case 2:
        return isPlaceholder(a) && isPlaceholder(b) ? f3
             : isPlaceholder(a) ? curry_2(function(_a, _c) { return fn(_a, b, _c); })
             : isPlaceholder(b) ? curry_2(function(_b, _c) { return fn(a, _b, _c); })
             : curry_1(function(_c) { return fn(a, b, _c); });
      default:
        return isPlaceholder(a) && isPlaceholder(b) && isPlaceholder(c) ? f3
             : isPlaceholder(a) && isPlaceholder(b) ? curry_2(function(_a, _b) { return fn(_a, _b, c); })
             : isPlaceholder(a) && isPlaceholder(c) ? curry_2(function(_a, _c) { return fn(_a, b, _c); })
             : isPlaceholder(b) && isPlaceholder(c) ? curry_2(function(_b, _c) { return fn(a, _b, _c); })
             : isPlaceholder(a) ? curry_1(function(_a) { return fn(_a, b, c); })
             : isPlaceholder(b) ? curry_1(function(_b) { return fn(a, _b, c); })
             : isPlaceholder(c) ? curry_1(function(_c) { return fn(a, b, _c); })
             : fn(a, b, c);
    }
  };
};
