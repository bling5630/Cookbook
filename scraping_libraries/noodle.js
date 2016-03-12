var noodle = require('noodlejs');

noodle.query({
  url: 'http://index.hu',
  type: 'html',
  selector: 'p.article',
  extract: 'text'
})
.then(function (results) {
  console.log(results);
});

noodle.html.select(htmlString, {
    selector: 'p.article',
    extract: 'text'
})
.then(function (result) {
  console.log(result);
});
