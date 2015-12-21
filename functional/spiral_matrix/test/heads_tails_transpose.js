var _ = require('ramda');


var list = [
          [1,2,3,4],
          [5,6,7,8],
          [9,10,11,12],
          [13,14,15,16],
];

var heads = _.reduce(function(acc, l) {
  return _.concat(acc, [_.head(l)]);
}, []);

var tails = _.reduce(function(acc, l) {
  return _.concat(acc, [_.tail(l)]);
}, []);

function transpose_acc(acc, list) {
  return (_.any(_.isEmpty, list)) ? acc : transpose_acc(_.concat(acc, [heads(list)]), tails(list));
}

function transpose(list) {
  return transpose_acc([], list);
}

var result = {
  transpose: transpose(list),
  transpose_2: transpose(transpose(list))
};

console.log(result);
