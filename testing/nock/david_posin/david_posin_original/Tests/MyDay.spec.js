var myDay = require ('./../MyDay.js'),
	nock = require ('nock');

describe ('How was my day response', function () {
	it ('test a good day', function (done) {
		nock ('http://fakeserver')
		.get ('/dayreader')
		.reply (200, {day:'good'});
		
		new myDay (function (data){
			data = JSON.parse(data);
			expect (data.day).toEqual ('good');
			done ();
		});
	}); 
});