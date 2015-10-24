var _ = require('ramda');

var processData = _.compose(
  calculatesStuff,
  sortByDate,
  filterByStatus
);

function log(note, input) {
  console.log(note + ' --- ' + input);
  return input;
}

var processData = _.compose(
  calculatesStuff,
  sortByDate,
  log('filtered data'),
  filterByStatus
);
