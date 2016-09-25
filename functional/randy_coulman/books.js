const _ = require('ramda');

/*
// firt attempt
const publishedInYear = (book, year) => book.year === year;

const titlesForYear = (books, year) => {
  const selected = filter(book => publishedInYear(book, year), books);

  return map(book => book.title, selected);
};

// Full function version:
function publishedInYear_full_function(year) {
  return function(book) {
    return book.year === year;
  };
}

// Arrow function version:
const publishedInYear_arrow = year => book => book.year === year;
*/

const publishedInYear = year => book => book.year === year;

const titlesForYear = (books, year) => {
  const selected = _.filter(publishedInYear(year), books);

  return _.map(book => book.title, selected);
};
