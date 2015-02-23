var gss = require('google-spreadsheet');

var my_sheet = new gss('1QsLP9wh4SrHfUi_stEYFD30952w8RV5kTj-bmTpYtVM');

my_sheet.getInfo(function(err, ss_info) {
	if (err) console.log(err);

	console.log(ss_info.title + ' is loaded');

	my_sheet.getRows(1, function(err, row_data) {
		console.log('pulled in ' + row_data.length + ' rows ');
	});

	// you can use the worksheet objects to add or read rows
	ss_info.worksheets[0].getRows(function(err, rows) {
		console.log(ss_info.worksheets[0].title + ' has ' + rows.length + 'rows');
	});
});