var _ = require('lodash'),
	curry = require('ramda').curry,
	ljs = require('lambdajs').expose(global);

var DATA = ' alma apad alma korte alma korte barack meg21gy nvpnsfvnpsnvfFDSVND FÉBVÉBVDSVBSBDV AVNWOÉNVOÉAN FLNW FNWEAP1424 SPF8342846+!""+%_fsvseer"+%__DS';

// step #5

var calculateByFrequency = function(xs) {
	return reduce(calculateFrequencySimple, {}, xs);
};

// step #4
var calculateFrequencySimple = function(x, y) {
	x[y] = ++x[y] || 1;
	return x;
};

// step #3
var filterEverythingByLength = filter(function(n) {
	return n.length > 2 && n.length < 10;
});

// step #2
var splitTheContent = split(' ');

// step #1
var clearTheParsedText = compose(toString,
	toLowerCase,
	replace(/[^a-zA-Z ]/g, ""),
	replace(/\s+/g, " "));

// pointfree way
var result = compose(
	calculateByFrequency,
	filterEverythingByLength,
	splitTheContent,
	clearTheParsedText);

console.log(result(DATA));
//console.log(calculateByFrequency(result(DATA)));