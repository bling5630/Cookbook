'use strict';

var test = require('tape');


test('sortByCount', function(t) {
  var input = [];
  var output = sortByCount(input);
  t.equal(output, []);

  var input = ['alma'];
  var output = sortByCount(input);
  t.equal(output, [['alma', 1]]);


  var input = ['alma', 'korte'];
  var output = sortByCount(input);
  t.equal(output, [['alma', 1], ['korte', 1]]);

  var input = ['alma', 'alma'];
  var output = sortByCount(input);
  t.equal(output, [['alma', 2]]);
});



///Cheerieos resz

function (error, response, body) {
  validateBody(body);
  var wordArray = transformPageToWordArray(body);
  var output = sortByCount(wordArray);
  JSON.stringify(output);
} 

function transformPageToWordArray(body) {
  var $page = cheerio.load(body);
  var article = $page('body').text();
  var text = clearContent(article);
  return filterContent(text);
}