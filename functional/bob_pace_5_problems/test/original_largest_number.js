var _ = require('ramda');

describe("given list of non negative integers with the original way", function() {
  var example = [50, 2, 1, 9];

  it("arranges them to form largest number possible", function() {
    var sortByLexicalDesc = _.compose(_.reverse, _.sortBy(_.toString));
    var concat = (x, y) => x + y;

    var largestNumberPossible = _.compose(
      parseInt,
      _.reduce(concat, ""),
      _.map(_.toString),
      sortByLexicalDesc
    );

    var result = largestNumberPossible(example);
    result.should.eql(95021);
  });

});
