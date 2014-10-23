var myString = "This is why it is common to see JavaScript programmers using these functions";

var update = myString.replace(/is|are/g, function(s) {
	return [].map.call(s, function() {
		return '*'
	}).join('');
});

console.log(myString);