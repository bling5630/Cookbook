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

var transpose_two = list =>
    _.addIndex(_.map)((column, index) =>
    _.map(_.nth(index), list), _.head(list)
  );

var transpose_three = list =>
    _.addIndex(_.map)(_.pipe(_.nthArg(1),
    _.nth,
    _.map(_.__, list)),
    _.head(list)
  );

var transpose_four = list =>
    _.reduce(_.zipWith(_.flip(_.append)),
    _.repeat([], _.apply(Math.min, _.map(_.length, list))),
    list
    );

var transpose_five = _.lift(_.reduce(_.zipWith(_.flip(_.append))))(
   _.pipe(_.map(_.length),
   _.apply(Math.min),
   _.repeat([])),
   _.identity
);

var BASE_SHORTEST = _.compose(
  _.apply(Math.min),
  _.map(_.length)
);

var transpose_six = _.lift(_.reduce(_.zipWith(_.flip(_.append))))(
   _.compose(_.repeat([]), BASE_SHORTEST),
   _.identity
);

var BASE_RESULT = [
    transpose_one(BASE_DATA),
    transpose_two(BASE_DATA),
    transpose_three(BASE_DATA),
    transpose_four(BASE_DATA),
    transpose_five(BASE_DATA),
    transpose_six(BASE_DATA)
];

console.log(BASE_RESULT);
