const _ = require('ramda');

const publishedInYear = _.curry((year, book) => book.year === year);

const titlesForYear = (books, year) => {
  const selected = _.filter(publishedInYear(year), books);

  return _.map(book => book.title, selected);
};
