var _ = require('ramda');

/*
// original
const titlesForYear = curry((year, books) =>
  pipe(
    filter(publishedInYear(year)),
    map(book => book.title)
  )(books)
)


*/
//pointfree

const titlesForYear = year =>
  _.pipe(
    _.filter(publishedInYear(year)),
    _.map(book => book.title)
  );
