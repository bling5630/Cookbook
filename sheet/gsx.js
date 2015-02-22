var gsx = require('gsx'),
	XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest,
	xhr = new XMLHttpRequest();

gsx("1NgNI5j3J_wDTK55ejB4T9XFfmvGa76Og_Feivp2ld_c", function(err, data) {
	console.log(data);

	data.sheets[0].fetch(function(err, data) {
		console.log(data);
	});
});