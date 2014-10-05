var school = [1, 2, 3, 4, 5, 6, 7, 8, 3, 35, 3, 5];


var result = [];

Array.prototype.map = function(grade) {
	//var result = [];
	this.forEach(function(item) {
		result.push(grade(item));
	});
	return result;
};
console.log(result);

/**var doubles = school.map(function(num)
 * {return num * 2; }); console.log(doubles);
 */