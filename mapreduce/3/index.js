var _ = require('lodash');
var document = "a";

var titles = Array.prototype.slice.call(document.getElementsByTagName('title'))
	.map(function(node) {
		return node.innerText;
	});

console.log(titles);