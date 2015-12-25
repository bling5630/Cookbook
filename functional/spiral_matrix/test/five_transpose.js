var _ = require('ramda');

var BASE_DATA = [
          [1,2,3,4],
          [5,6,7,8],
          [9,10,11,12],
          [13,14,15,16],
];


var transpose_one = list =>
    _.addIndex(_.map)((column, index) =>
    _.map(row => _.nth(index)(row), list), _.head(list)
  );






console.log(transpose_one(BASE_DATA));
