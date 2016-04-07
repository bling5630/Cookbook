var addTweedleClass = partialFirstOfTwo(addClass, 'tweedle');
var addBoyClass = partialFirstOfTwo(addClass, 'boy');

var ids = ['DEE', 'DUM'];
var elements = map(document.getElementById, ids);
elements = map(addTweedleClass, elements);
elements = map(addBoyClass, elements);
