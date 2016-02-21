var realEyes= 18;
var cheppers=25;
var incepteam=27;
var organica=24;

function feeCalculator(fee, salary) {
  return fee/100*salary*12;
}
console.log(feeCalculator(realEyes, 800000));
console.log(feeCalculator(cheppers, 800000));
console.log(feeCalculator(incepteam, 800000));
console.log(feeCalculator(organica, 800000));


var realEyes= 18;
var cheppers=25;
var incepteam=27;
var organica=24;
var result = function feeCalculator(fee, salary) {
return fee/100*salary*12;};

console.log(result(realEyes, 500000));
