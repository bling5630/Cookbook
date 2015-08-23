var _ = require('lodash'),
	ljs = require('lambdajs').expose(global);


var clearTheParsedText = compose(toString, toLowerCase, replace(/[^a-zA-Z ]/g, ""), replace(/\s+/g, " "));

console.log(clearTheParsedText('nvpnsfvnpsnvfFDSVNDSPF8342846+!""+%_fsvseer"+%__DS'));