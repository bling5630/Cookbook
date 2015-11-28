var _ = require('ramda');

var BASE_NUMBER = 5;
var total = _.multiply(BASE_NUMBER);
var result= [];

function converter(n) {

  for(var i=0;i<n;i++) {

      var rs = [];
      for(var j=0;j<n;j++) {
          rs.push(0);
      }
      result.push(rs);
  }
  return result;
}


console.log(converter(BASE_NUMBER));
