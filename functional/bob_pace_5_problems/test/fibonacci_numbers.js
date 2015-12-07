var _ = require('ramda'),
  bigInt = require('big-integer');

describe("fibonacci sequence", function () {
  var fib = _.memoize((n) => {
      if (n.isZero() || n.eq(1)) {
        return n;
      }
      else {
        return fib(n.minus(1)).plus(fib(n.minus(2)));
      }
    });

    it("compute first 100 numbers", function () {
      var result = _.map(
      _.compose(toString, fib),
      _.range(0, 101).map((x) => bigInt(x))
    );

    result[100].should.eql('354224848179261915075');
    });

// end
});
