// function expression

var even = function(n) {
  return n%2===0;
};

// returning a function

var log = function (base) {
  return function (n) {
    return Math.log(n) / Math.log(base);
  };
};

var log10= log(10);

console.log(log10(100));
