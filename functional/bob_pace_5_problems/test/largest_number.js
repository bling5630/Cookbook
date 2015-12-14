var _ = require('ramda');

describe("given list of non negative integers with my solution", function() {
  var BASE_LIST = [50, 2, 1, 9];

  it("arranges them to form largest number possible", function() {
    var SPACER = _.join('');

    var SORT_BY = _.sortBy,
        TO_STRING = _.toString,
        REVERSE = _.reverse;


    var BASE_DESC = _.compose(REVERSE, SORT_BY(TO_STRING));

    var result = parseInt(SPACER(BASE_DESC(BASE_LIST)));
    result.should.eql(95021);
  });

});

//console.log(parseInt(SPACER(BASE_DESC(BASE_LIST))));
