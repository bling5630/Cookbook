var _ = require('lodash'),
	jsdom = require('jsdom'); //.jsdom;

jsdom.env(
  "https://news.ycombinator.com/bigrss",
  ["http://code.jquery.com/jquery.js"],
  function (errors, window) {
    console.log("There are", window.$("item").length, "items!");
    console.log("There are", window.$("title").length, "titles!");
    console.log("There are", window.$("description").length, "descriptions!");
  }
);


/*
var document = jsdom("https://news.ycombinator.com/bigrss");
	//window = document.parentWindow;

var titles = Array.prototype
	.slice
	.call(document.getElementsByTagName('title'))
	.map(function(node) {
		return node.innerText;
	});


console.log(titles);
console.log(document);
*/