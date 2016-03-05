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

let add = (a, b) => a + b;
let sum = (arr) => arr.reduce(add, 0);
let getProperty = (obj, propName) => obj[propName];

let getWhisky = (obj) => getProperty(obj, 'whisky');
let getPrices = (arr) => arr.map((a) => getProperty(a, 'price'));

let getTotalWhiskyPrice = (obj) => sum(getPrices(getWhisky(obj)));

console.log(getTotalWhiskyPrice(products)); // => 176.4
