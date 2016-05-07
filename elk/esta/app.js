var ES = require('esta');

ES.CONNECT(index, function (response) {
  console.log(response);
  // for more detailed stats see: STATS method below
});

// define the record you want to store:
var record = {
  date: new Date().toISOString(),
  message: 'Your amazing message goes here'
};
ES.CREATE(record, function(response) {
 // do what ever you like with the response
});
