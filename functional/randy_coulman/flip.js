const _ = require('ramda');

const publishedInYear = _.curry((book, year) => book.year === year);

const titlesForYear = (books, year) => {
  const selected = _.filter(_.flip(publishedInYear)(year), books);

  return _.map(book => book.title, selected);
};
