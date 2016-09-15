var _ = require('ramda');

//curry

function isString(test) {
    return _.is(String, test);
}

var result = isString('foo');

var isString = _.is(String),
    result_1 = isString(2),
    result_2 = isString('yes');

console.log(result_1 + ' and ' + result_2);
