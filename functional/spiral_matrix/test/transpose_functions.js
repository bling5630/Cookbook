var _ = require('ramda');

var BASE_DATA = [
          [1,2,3,4],
          [5,6,7,8],
          [9,10,11,12],
          [13,14,15,16],
];

var transpose_1 = function(data) {
  return _.addIndex(_.map)(function(column, index) {
    return _.map(function(row) {
      return _.nth(index)(row);
    }, data);
  }, _.head(data));
};


console.log(transpose_1(BASE_DATA));
console.log('break');

var BASE_DATA_2 = [
          [1,2,3,4],
          [5,6,7,8],
          [9,10,11,12],
          [13,14,15,16],
];

var transpose_2 = function(data_2) {
  return _.addIndex(_.map)(function(column, index) {
    return _.map(_.nth(index), data_2);
  }, _.head(data_2));
};

console.log(transpose_2(BASE_DATA_2));
console.log('break_#2');

var BASE_DATA_3 = [
          [1,2,3,4],
          [5,6,7,8],
          [9,10,11,12],
          [13,14,15,16],
];

var transpose_3 = function(data_3) {
  return _.addIndex(_.map)(_.pipe(_.nthArg(1),
                                  _.nth,
                                  _.map(_.__, data_3)),
                                  _.head(data_3));
};


console.log(transpose_3(BASE_DATA_3));
