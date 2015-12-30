var _ = require('ramda');

var BASE_DATA = [
          [1,2,3,4],
          [5,6,7,8],
          [9,10,11,12],
          [13,14,15,16],
];

function transpose(xs) {
  var shortest = Math.min.apply(null, _.map(_.length, xs));
  return _.reduce(_.zipWith(_.flip(_.append)), _.repeat([], shortest), xs);
}

var transpose_2 = _.lift(_.reduce(_.zipWith(_.flip(_.append))))(
   _.pipe(_.map(_.length),
   _.apply(Math.min),
   _.repeat([])),
   _.identity
);

console.log(transpose(BASE_DATA));

console.log(transpose_2(BASE_DATA));
