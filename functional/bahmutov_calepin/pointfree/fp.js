var fp = require('functional-pipeline');
var S = require('spots');
function div(a, b) {
    return a / b;
}
var result = ['3', '6', '9'].map(fp(
    S(parseInt, S, 10),
    S(div, S, 3)
));

console.log(result);

var convertAndDivideBy3 = fp( S(parseInt, S, 10), S(div, S, 3) );
console.log(convertAndDivideBy3('300'));
