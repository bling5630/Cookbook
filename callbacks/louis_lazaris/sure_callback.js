function mySandwitch(param1, param2, callback) {
	console.log('Started eating my sandwitch. \nIt has ' + param1 + ', ' + param2);
	if (callback && typeof(callback) === 'function') {
		callback();
	}
}

mySandwitch('ham', 'cheese', 'vegetables');