


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

var add = function(a, b) { return a + b; };
    sum = function (arr) { return arr.reduce(add, 0); };
    getProperty = function(obj, propName) {
                            return obj[propName];
                          };

var getWhisky = function (obj) { return getProperty(obj, 'whisky'); };
    getPrices = function (arr) {
      return arr.map(function (a) {
        return getProperty(a, 'price');
      });
    };

var getTotalWhiskyPrice = function (obj) {
      return sum(getPrices(getWhisky(obj)));
    };

console.log(getTotalWhiskyPrice(products)); // => 176.4
