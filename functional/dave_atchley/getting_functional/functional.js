

// Returns a function which reverses the order of the
// arguments to the passed in function when invoked.

function flip(fn) {
  return function() {
    var args = [].slice.call(arguments);
    return fn.apply(this, args.reverse);
  };
}

// Returns a new function that curries the original
// function's arguments from right to left.

function rightCurry(fn, n) {
  var arity = n || fn.length,
        fn = flip(fn);
  return  function curried() {
    var args = [].slice.call(arguments),
    context = this;

    return args.length >= arity ?
    fn.apply(context, args.slice(0, arity)) :
    function() {
      var rest = [].slice.call(arguments);
      return curried.apply(context, args.concat(rest));
    };
  };
}

// Filter `list` using the predicate function `fn`

function filter(list, fn) {
  return list.filter(fn);
}
