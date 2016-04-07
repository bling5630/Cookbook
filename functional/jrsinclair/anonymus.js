var _ = require('ramda');

var numbers = [1, 2, 3];
var doubledArray = _.map(function(x) { return x * 2;}, numbers);
console.log(doubledArray);
//=> [ 2, 4, 6 ]
