var GoogleSpreadsheet = require("google-spreadsheet");

// spreadsheet key is the long id in the sheets URL
var doc = new GoogleSpreadsheet('1pH76XrC8SDJwkBZF8akKWeBWPm44Z0SqCmNm0JOTS48');
var sheet;

    doc.getInfo(function(err, info) {
      console.log('Loaded doc: '+ info.title +' by '+ info.author.email);
      console.log('Loaded doc: '+ info.title +' by '+ info.author.name);
      console.log('Loaded doc: '+ info.title +' by '+ info.updated);
      sheet = info.worksheets[0];
      console.log('sheet 1: '+ sheet.title +' '+ sheet.rowCount +' x '+ sheet.colCount);
      //step();
    });

    doc.getRows(
      1, function(err, row_data) {
        console.log('pulled in ' + row_data.length + ' rows ');
        //console.log(row_data);
      });
      
