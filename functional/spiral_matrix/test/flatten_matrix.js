var _ = require('ramda');

describe("matrix demo", function () {

//var flatTheMatrix = _.identity; // show the desired result
var flatTheMatrix = _.flatten();

it("#1 exercise - flat the matrix simple", function () {

        flatTheMatrix([
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ]).should.eql([1,2,3,4,5,6,7,8,9]);

});


});
