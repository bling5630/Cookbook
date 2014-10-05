var school = [1, 2, 3, 4, 5, 6, 7, 8, 3, 35, 3, 5];

Array.prototype.map = function(student) {
	var result = [];
	this.forEach(function(item) {
		result.push(student(item));
	});
	return result;
};


/*var doubles = school.map(function(num){
	return num * 2;
});

console.log(doubles);*/