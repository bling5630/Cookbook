var cheerio = require('cheerio');

var BASE_MOCK_HTML =
	[
		'<!DOCTYPE html>',
		'<body>',
		'<div id="comic">',
		'</div>',
		'<p> My first paragraph. </p>',
		'<p> My second paragraph. </p>',
		'<p> My third paragraph. </p>',
		'<p> My fourth paragraph. </p>',
		'</body>',
		'</html>'
	].join('');

var $something = cheerio.load(BASE_MOCK_HTML),
	parsedTheThing = $something('body').text();

console.log(parsedTheThing);