var a = function(num1, num2) {
	return num1 * num2;
};

//create a twice function at run time from multiply function, apply 2

var twice = function(num) {
	return a(2, num);
}; //or: var twice = a.bind(null,2);

console.log(a(2, 3));
console.log(twice(3));