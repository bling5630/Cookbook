/**
 * Module dependencies
 **/

var spreadsheet = require('edit-google-spreadsheet'),
	creds = require('creds');

spreadsheet.load({
		debug: true,
		spreadsheetName: "example",
		worksheetName: "example",

		// Authentication method: Username and Password
		// Security ?

		username: "example@example.com",
		password: "123example",


	},

	// Read spreadsheet

	function sheetRead(err, spreadsheet) {
		if (err) throw err;

		spreadsheet.receive(function(err, columns, info) {
			if (err) throw err;

			console.log("Found columns", columns);
			console.log("Found columns", info);
		});
	}

	/**
		// Update spreadsheet

		function sheetUpdate(err, spreadsheet) {
			if (err) throw err;

			spreadsheet.add({
				3: {
					5: "Hello!"
				}
			});

			spreadsheet.send(function(err) {
				if (err) throw err;
				console.log("Updated Cell at row 3, column 5 to Hello!");
			});
		}
	**/

);