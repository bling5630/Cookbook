// exercise 1314 - insert multiple items

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
	if (err) throw err;

	var doc = [{
		'student': 'Calvin',
		'age': 6
	}, {
		'student': 'Anna',
		'age': 12
	}];

	db.collection('students').insert(doc, function(err, inserted) {
		if (err) throw err;

		console.dir("Successfully inserted:" + JSON.stringify(inserted));
		return db.close();
	});
});