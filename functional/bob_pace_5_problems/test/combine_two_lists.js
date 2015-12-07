var _ = require('ramda'),
  bigInt = require('big-integer');


  describe("combine two list", function () {

  var one = [1,2,3,4];
  var two = ['a','s','d','e'];

  it("#1 - doing the Ramda way", function () {
      var result = _.flatten(_.zip(one, two));
      //var result = _.identity(); show the desired output
      result.should.eql([1,'a',2,'s',3,'d', 4, 'e']);

  });

//end
  });
