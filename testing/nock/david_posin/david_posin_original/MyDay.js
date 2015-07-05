var http = require ('http');

exports = module.exports = function (fn) {

	http.get ('http://fakeserver/dayreader', function (res) {
		res.setEncoding ('utf8');
		res.on ('data', function (data){
			fn.call (this, data);
		});
	})

}