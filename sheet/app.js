var GoogleSpreadsheets = require('google-spreadsheet');

var my_sheet = new GoogleSpreadsheets("1NgNI5j3J_wDTK55ejB4T9XFfmvGa76Og_Feivp2ld_c");

my_sheet.getInfo(function(err, ss_info) {
	if (err) console.log(err);

	console.log(ss_info.title);

	ss_info.worksheets[0].getRows(function(err, rows) {
		console.log(ss_info.worksheets[0].title + ' has ' + rows.length + 'rows');
	});
});