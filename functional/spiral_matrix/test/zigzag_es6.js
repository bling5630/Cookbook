var _ = require('ramda');

var transpose = a => {
  return _.map(c => {
    return _.map(r => {
      return r[c];
    }, a);
  }, _.keys(a[0]));
};



var a = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
];

console.log(transpose(a));
