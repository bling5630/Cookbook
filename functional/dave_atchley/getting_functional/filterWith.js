var BASE_NUMBER = 2;

// Filter `list` using the predicate function `fn`

function filter(list, fn) {
  return list.filter(fn);
}

function filterWith(fn) {
  return function(list) {
    return filter(list, fn);
  };
}

var list = [1,2,3,4,5,6,7,8,9];

var justEvens = filterWith(function(n) {
  return n % BASE_NUMBER === 0;
});

console.log(justEvens(list));
