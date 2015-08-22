// Cacheable
var _ = require('lodash');

var memoize = function(f) {
	var cache = {};

	return function() {
		var arg_str = JSON.stringify(arguments);
		cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
		return cache[arg_str];
	};
};

var pureHttpCall = _.memoize(function(url, params) {
	return function() {
		return $.getJSON(url, params);
	};
});