var _ = require('ramda');
require('./support');


// raw data 
var rawMonths = ['2010-10', '2011-01', '2011-12', '2012-05'];

// option tagger 
var optionTagger = htmlTagger('option');

// year months
var month = splitN('-', 1);
var year = splitN('-', 0);

// need to make a nice date 
var pretyDate = function(uglyDate) {
	return monthWord(month(uglyDate)) + " " + year(uglyDate);
};

// add value tag 
var addValue = htmlAddAttribute('value');

// generate a full option with value and correctly formatted display date
var fullOption = function(uglyDate) {
	return compose(addValue(uglyDate), optionTagger, pretyDate)(uglyDate);
};

// create html string of options for each year-month string in an array. 
var dateOptions = compose(array2str, map(fullOption));
console.log(dateOptions(rawMonths));