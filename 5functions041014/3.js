var school = [1, 2, 3, 4, 5, 6, 7, 8, 3, 35, 3, 5];

Array.prototype.map = function(grade) {
	var result = [];
	this.forEach(function(item) {
		result.push(grade(item));
	});
	return result;
};

var a = school.map(function(x) {
	return x + 12;
});

console.log(a);