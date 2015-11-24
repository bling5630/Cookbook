var _ = require('ramda'),
	ljs = require('lambdajs').expose(global);

var calculateCharactersByFrequency = _.countBy(_.identity),
		splitTheString = _.split('');

var cheppers = compose(
	 calculateCharactersByFrequency,
	  splitTheString
);
console.log(cheppers('dvcdscvdsvdfvfdvfdv'));

//{ d: 6, v: 6, c: 2, s: 2, f: 3 }
