var jsdom = require("jsdom");

jsdom.env({
	url: "https://news.ycombinator.com/bigrss",
	scripts: ["http://code.jquery.com/jquery.js"],
	done: function(errors, window) {
		var $ = window.$;
		console.log($("title").length);
	}
});