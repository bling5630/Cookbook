var school = [1, 2, 3, 4, 5, 6, 7, 8, 3, 35, 3, 5];

Array.prototype.filter = function(grade) {
	var result = [];
	this.forEach(function(item) {
		if (grade(item)) {
			result.push(item)
		}
	})
	return result;
}

var a = school.filter(function(x) {
	return x > 3 && x < 8
})

console.log(a)