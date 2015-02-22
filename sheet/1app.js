var GoogleSpreadsheets = require("google-spreadsheets");

GoogleSpreadsheets({
    key: "1NgNI5j3J_wDTK55ejB4T9XFfmvGa76Og_Feivp2ld_c"
}, function(err, spreadsheet) {
    spreadsheet.worksheets[0].cells({
        range: "A1C1:A5C5"
    }, function(err, cells) {
        // Cells will contain a 2 dimensional array with all cell data in the
        // range requested.
        console.log(cells);
    });
});