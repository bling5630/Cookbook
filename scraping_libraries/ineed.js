var ineed = require('ineed');

ineed.collect.images.hyperlinks.from('http://index.hu',  
  function (err, response, result) {
     console.log(result);
  });
