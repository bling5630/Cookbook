var _ = require('lodash'),
	jsdom = require('jsdom').jsdom;


var document = jsdom("https://news.ycombinator.com/bigrss"),
	window = document.parentWindow;
var titles = Array.prototype.slice.call(document.getElementsByTagName('title'))
	.map(function(node) {
		return node.innerText;
	});


console.log(titles);