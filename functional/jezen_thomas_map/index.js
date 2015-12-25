var _ = require('ramda');

var mixedEmails = ['ASFDSFDS@gmail.com', 'FSDF@gmail.com', 'OO@gmail.com'];

var stringify = _.toString;

var toLowerCase = _.toLower;

var result = _.pipe(stringify,toLowerCase);

console.log(result(mixedEmails));
