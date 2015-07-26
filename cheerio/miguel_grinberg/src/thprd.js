var request = require('request'),
	cheerio = require('cheerio');

pools = {
	'Aloha': 3,
	'Beaverton': 15,
	'Conestoga': 12,
	'Harman': 11,
	'Raleigh': 6,
	'Somerset': 22,
	'Sunset': 5,
	'Tualatin Hills': 2
};

days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var url = 'http://www.thprd.org/schedules/schedule.cfm?cs_id=' + pools[pool];


for (var pool in pools) {
	request(url, (function(pool) {
		return function(err, resp, body) {
			if (err)
				throw err;
			$ = cheerio.load(body);
			console.log(pool);
			// TODO: scraping goes here!

		};
	})(pool));
}