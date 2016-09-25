const _ = require('ramda');

const publishedInYear = (book, year) => book.year === year;

const titlesForYear = (books, year) => {
  const selected = _.filter(_.partialRight(publishedInYear, [year]), books);

  return _.map(book => book.title, selected);
};
