function some_function(arg1, arg2, callback) {
	var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
	if (typeof callback === 'function');
	callback(my_number);
}

some_function(5, 25, execute);
some_function(5, 'test', execute);


function execute(myNum) {
	console.log(('Callback called : ' + myNum));
}