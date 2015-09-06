var _ = require('lodash'),
	curry = require('ramda').curry,
	R = require('ramda'),
	ljs = require('lambdajs').expose(global);

// ``` 

var DATA = ' alma apad alma korte alma korte barack meg21gy nvpnsfvnpsnvfFDSVND FÉBVÉBVDSVBSBDV AVNWOÉNVOÉAN FLNW FNWEAP1424 SPF8342846+!""+%_fsvseer"+%__DS';

// step #6
var transformDataToJSON = R.pipe(R.toPairs, R.map(R.zipObj(["name", "quantity"])));

//console.log(transformData(input));

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
var splitTheContent = R.split(' ');

// step #1
var clearTheMessyText = compose(
	replace(/[^a-zA-Z ]/g, ""),
	replace(/\s+/g, " "));

var stringTheText = R.toString;

var doLowerCaseTheText = R.toLower;


// pointfree way
var result = compose(
	transformDataToJSON,
	calculateByFrequency,
	filterEverythingByLength,
	splitTheContent,
	clearTheMessyText,
	doLowerCaseTheText,
	stringTheText
);

console.log((result(DATA)));