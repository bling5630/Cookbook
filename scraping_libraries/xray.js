var Xray = require('x-ray');
var x = Xray();

x('https://index.hu', '.articles', [{
  title: '.article-title',
  image: '.article-image@src',
}])(function(err, result){
    console.log(result);
});
