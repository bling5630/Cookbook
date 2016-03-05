var _ = require('ramda');
// var _ = require('lodash/fp');

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

var getWhisky = _.prop('whisky');
var getPrices = _.map(_.prop('price')); // Using Ramda
//var getPrices = _.map('price'); // Using lodash-fp

var getTotalwhiskyPrice = _.compose(_.sum,
                                       getPrices,
                                       getWhisky);

console.log(getTotalwhiskyPrice(products));   // => 176.4
