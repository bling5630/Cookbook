var osmosis = require('osmosis');

osmosis.get('http://index.hu') // url of the site you want to scrape
  .find('p.article') // selector
  .set('article') // name of the key in the results
  .data(function(results) { //output
    console.log(results);
  });

  osmosis.get('http://site-you-wanna-scrape.com')
    .find('a.article')
    .set('articleLink')
    .follow('@href')  // &lt;-- follow link to scrape the next site
    .find('.article-content')
    .set('articleContent')
    .data(function(results) { //output
      console.log(results);
    });
