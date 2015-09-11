// Generic function with common data
function publish(item, author, callback) {
	console.log(item);
	var date = new Date();

	callback(author, date);
}

// Callback function with specific data
function messages(author, time) {
	var sendTime = time.toLocaleTimeString();
	console.log('Sent from ' + author + ' at ' + sendTime);
}

// Callback function with specific data
function articles(author, date) {
	var pubDate = date.toDateString();
	console.log('Written by ' + author);
	console.log('Published ' + pubDate);
}

publish('How are you?', 'Monique', messages);

publish("10 Tips for JavaScript Developers", "Jane Doe", articles);