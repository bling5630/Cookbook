var _ = require('lodash');

var products = {
    'whisky': [
      {
        'name': 'Ardberg Uigeadail',
        'price': 54.35,
        'currency': 'GBP'
      },
      {
        'name': 'Laphroaig Quarter Cask',
        'price': 39.95,
        'currency': 'GBP'
      },
      {
        'name': 'Klichoman Machir Bay',
        'price': 42.25,
        'currency': 'GBP'
      },
      {
        'name': 'Talisker Storm',
        'price': 39.85,
        'currency': 'GBP'
      }
    ]
  };

var getWhisky = _.partialRight(_.get, 'whisky');
var getPrices = _.partialRight(_.map, 'price');

var getTotalWhiskyPrice = _.flowRight(_.sum,
                                         getPrices,
                                         getWhisky);

console.log(getTotalWhiskyPrice(products)); // => 176.4
