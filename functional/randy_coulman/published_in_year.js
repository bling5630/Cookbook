const _ = require('ramda');

/*
const publishedInYear = _.curry((year, book) => book.year === year);

const titlesForYear = (books, year) => {
  const selected = _.filter(publishedInYear(year), books);

  return _.map(book => book.title, selected);
};

const publishedInYear = _.curry((year, book) => book.year === year);

const titlesForYear = (books, year) =>
  _.pipe(
    _.filter(publishedInYear(year)),
    _.map(book => book.title)
  )(books);
*/

// final version
const publishedInYear = _.curry((year, book) => book.year === year);

const titlesForYear = _.curry((year, books) =>
  _.pipe(
    _.filter(publishedInYear(year)),
    _.map(book => book.title)
  )(books)
);
