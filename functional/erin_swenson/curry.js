// Binary function

// (Number, Number) => Number

function sum(x, y) {
  return x + y;
}

// Curried function

function sum_curried(x) {
  return function(y) {
    return x + y;
  };
}

var addTen = sum_curried(10); // type: Number => Number

console.log(addTen(20)); // 30
console.log(addTen(55)); // 65

//  type: Number → Number → Number → Number → Number

function sumFour(w) {
  return function(x) {
    return function(y) {
      return function(z) {
        return w + x + y + z;
      };
    };
  };
}

console.log(sumFour(1)(2)(10)(20)); // 33

var addTen = sumFour(3)(3)(4);

console.log(addTen(20)); // 30


// Curry 

function curry(fx) {
  var arity = fx.length;

  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= arity) {
      return fx.apply(null, args);
    } else {
      return function f2() {
        var args2 = Array.prototype.slice.call(arguments, 0);
        return f1.apply(null, args.concat(args2));
      };
    }
  };
}

var sumFourCurried = curry(function(w, x, y, z) {
  return w + x + y + z;
});

var
  f1 = sumFourCurried(10), // returns a function awaiting three arguments
  f2 = sumFourCurried(1)(2, 3), // returns a function awaiting one argument
  f3 = sumFourCurried(1, 2, 7), // returns a function awaiting one argument
  x = sumFourCurried(1, 2, 3, 4), // sumFourCurried has been fully applied; x is equal to 1+2+3+4=10
  x2 = sumFourCurried(1)(2)(3)(4); // fully applied; x2 equals 10

console.log(f2);