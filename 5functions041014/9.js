var school = [
	[1, 2, 3],
	[4, 5, 6, 7, 8, 3],
	[35, 3, 5]
];

Array.prototype.mergeAll = function() {
	var result = [];
	this.forEach(function(subArray) {
		result.push.apply(result, subArray);
	});
	return result;
};

var a = school.mergeAll(function(x) {
	return x;
});

console.log(a);