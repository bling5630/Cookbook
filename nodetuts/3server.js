/**
 * blocking vs. asyncronous
 */

//Blocking example

for (var i = 1; i < 100; i++) {
	if (process.fork()) {
		var response = db.query(
			'SELECT * FROM articles WHERE id = ?', i);
		console.log(response);
	}
}

//Asyncronous example

function responseReady(response) {
	console.log(response);
}

for (var i = 1; i < 100; i++) {
	db.query(
		'SELECT * FROM articles WHERE id = i',
		i,
		responseReady);
}