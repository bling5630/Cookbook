var Yakuza = require('yakuza');
var cheerio = require('cheerio');

// define the main-scraper
Yakuza.scraper('siteName');

// define agents with their tasks
Yakuza.agent('siteName', 'articleFetcher')
  .plan(['getArticles'])
  .routine('getArticles', ['getArticles']);

// define tasks
Yakuza
  .task('siteName', 'articleFetcher', 'getArticles')
  .main(function (task, http, params) {
    http.get('http://www.nba.com', function (err, res, body) {
      if (err) {
        return task.fail(err, 'Request returned an error');
      }

      var $ = cheerio.load(body),
        articles = [];

      $('p.article').each(function (i, article) {
        articles.push($(article).text());
      });

      task.success(articles);
    });
  })
  .hooks({
    onSuccess: function(task){
      console.log(task.data); // prints the found articles
    }
  });

// create a new job and start it
var job = Yakuza.job('siteName', 'articleFetcher');
job.routine('getArticles');
job.run();
