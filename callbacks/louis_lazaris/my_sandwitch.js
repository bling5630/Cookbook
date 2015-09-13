function mySandwitch(param1, param2, callback) {
	console.log('Started eating my sandwitch. \nIt has ' + param1 + ', ' + param2);
	callback();
}

mySandwitch('ham', 'cheese', function() {
	console.log('Finished eating my sandwitch.');
});