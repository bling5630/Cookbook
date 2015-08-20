var nock = require('nock'),
	test = require('tape'),
	http = require('https'),
	cheerio = require("cheerio"),
	tapSpec = require('tap-spec');

var wordCount = require('./request');

var BASE_URL = 'https://medium.com/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363',
	BASE_MAIN_URL = 'https://medium.com',
	BASE_GET = '/tariqs-thoughts/30-years-ago-i-saw-the-future-ed0b4fc2b363';

// var BASE_HTML = require('./sample.html').toString();
// ok

test('#1 - has wordCount method', function(t) {
	t.plan(1);
	t.equals(typeof wordCount, 'function', 'First test: wordCount is a function');
	t.end();
});

// ok callback meghivode e, meglett erequest elve a url
test('#2 - wordCount method makes the correct api call', function(t) {
	t.plan(2);

	var scope = nock(BASE_MAIN_URL)
		.get(BASE_GET)
		.reply(200, 'mivan?');

	wordCount(function(err) {
		t.error(err, 'Works without error!');
		t.ok(scope.isDone(),
			'Second test: requests satisfied');
		t.end();
	});

});

// legyen atirva, folyo szoveg legyen, 

test('#3 - wordCount body mivan?', function(t) {
	t.plan(2);

	nock(BASE_MAIN_URL)
		.get(BASE_GET)
		.reply(200, 'mivan?');

	wordCount(function(err, body) {
		t.error(err, 'Works without error!');
		t.equals(body, 'mivan?');
		t.end();
	});
});

// legyen atirva, folyo szoveg legyen, 

test('mivan?', function(t) {


	var BASE_HTML =
		'<html>' +
		'<body>' +
		'<div id="comic">' +
		'</div>' +
		'<h1>My First Heading</h1>' +
		'<p> My first paragraph. </p>' +
		'</body>' +
		'</html>';

	nock(BASE_HTML)
		.get('/')
		.reply(200, 'mivan?');

	// fake html legyen, legyen benne tartalom, s konkretan wordcountert tesztelem le
	// ultimate nagy rendszert fogom letesztelni
	// azert haromszog, mert minel valosagosabb a teszt
	// minel inkabb unit teszt annal inkabb nuansz
	// egyet emeljek ki, azt tesztelem, hogy az egesz ossze lesz e kotve 
	// ha sok nock teszt van akkor nem solid

	wordCount(function(err, body) {
		t.equals(body, 'mivan?');
		t.end();
	});
});

test.createStream()
	.pipe(tapSpec());