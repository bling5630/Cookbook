// older version

var getChildren = function(x) {
	return x.childNodes;
};

var allTheChildren = map(getChildren);

// Lo-Das version

var allTheChildren = function(elements) {
	return _.map(elements, getChildren); 
};