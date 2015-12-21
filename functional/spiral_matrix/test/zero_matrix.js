var _ = require('ramda');


function converter(BASE_NUMBER) {
var BASE_TOTAL = BASE_NUMBER*BASE_NUMBER;
var BASE_RESULT= [];

  for(var i=0;i<BASE_NUMBER;i++) {

      var rs = [];
      for(var j=0;j<BASE_NUMBER;j++) {
          rs.push(0);
      }
      BASE_RESULT.push(rs);
  }

  return BASE_RESULT;
}

console.log(converter(5));
