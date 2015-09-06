var _ = require('lodash'),
	R = require('ramda'),
	ljs = require('lambdajs').expose(global);

//+ wordCount :: String -> number

var wordCount = function(str) {
	var words = split(' ', str);
	return (words).length;
};


//FP way 
//+ wordCounter :: String -> Number

var wordCount_2 = compose(length, split(' '));

console.log(wordCount_2('nvanv pfősdaf mcősa'));