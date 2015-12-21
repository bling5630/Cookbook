var _ = require('ramda');

var BASE_N = 10;

console.log(_.times(_.identity, BASE_N));

var BASE_NUMBER = 5;

function matrix_machine(n) {
  return _.times(_.identity, n);
}

console.log('just a sequence ' + matrix_machine(BASE_NUMBER));
