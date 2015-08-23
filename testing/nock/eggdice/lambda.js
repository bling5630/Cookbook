var _ = require('lodash'),
	ljs = require('lambdajs').expose(global);

var DATA = 'nvpnsfvnpsnvfFDSVND FÉBVÉBVDSVBSBDV AVNWOÉNVOÉAN FLNW FNWEAP1424 SPF8342846+!""+%_fsvseer"+%__DS';

var clearTheParsedText = compose(toString,
	toLowerCase,
	replace(/[^a-zA-Z ]/g, ""),
	replace(/\s+/g, " "));

console.log(clearTheParsedText(DATA));