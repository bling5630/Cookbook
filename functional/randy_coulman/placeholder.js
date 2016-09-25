const _ = require('ramda');

const threeArgs = _.curry((a, b, c) => { /* ... */ });

const middleArgumentLater = threeArgs('value for a', _.__, 'value for c');

const publishedInYear = _.curry((book, year) => book.year === year);

const titlesForYear = (books, year) => {
  const selected = _.filter(publishedInYear(_.__, year), books);

  return _.map(book => book.title, selected);
};
