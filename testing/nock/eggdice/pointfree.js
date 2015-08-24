var _ = require('lodash'),
	ljs = require('lambdajs').expose(global);

var DATA = ' apad alma korte barack mege21gy nvpnsfvnpsnvfFDSVND FÉBVÉBVDSVBSBDV AVNWOÉNVOÉAN FLNW FNWEAP1424 SPF8342846+!""+%_fsvseer"+%__DS';

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
var result = compose(filterEverythingByLength,
	splitTheContent,
	clearTheParsedText);

console.log(result(DATA));