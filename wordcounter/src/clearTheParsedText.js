var _ = require('lodash');

function clearTheParsedText(content) {
	return content.replace(/\s+/g, " ")
		.replace(/[^a-zA-Z ]/g, "")
		.toLowerCase()
		.toString();
}

var x = ('and Sections":[{"type":2, "COLLECTION HeaderMetada":');

console.log(clearTheParsedText(x));

module.exports = clearTheParsedText;