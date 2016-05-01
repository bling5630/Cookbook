var gss = require('google-spreadsheet');

var my_sheet = new gss('1pH76XrC8SDJwkBZF8akKWeBWPm44Z0SqCmNm0JOTS48');

my_sheet.getInfo(function(err, ss_info) {
	if (err) console.log(err);

	console.log(ss_info.title + ' is loaded');

	my_sheet.getRows(1, function(err, row_data) {
		console.log('pulled in ' + row_data.length + ' rows ');
    //console.log(row_data);
	});

	// you can use the worksheet objects to add or read rows
	ss_info.worksheets[0].getRows(function(err, rows) {
		console.log(ss_info.worksheets[0].title + ' has ' + rows.length + 'rows');
	});
});

my_sheet.getInfo(function(err, info) {
  if (err) console.log(err);
  console.log(info);
});

function managingSheets(step) {
    my_sheet.addWorksheet({
      title: 'my new sheet'
    }, function(err, my_sheet) {

      // change a sheet's title
      my_sheet.setTitle('new title'); //async

      //resize a my_sheet
      my_sheet.resize({rowCount: 50, colCount: 20}); //async

      my_sheet.setHeaderRow(['name', 'age', 'phone']); //async

      // removing a worksheet
      my_sheet.del(); //async

      step();
    });
  }
