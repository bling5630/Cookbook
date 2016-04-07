var _ = require('ramda');

var formatName = function(first, surname, nickname) {
    return first + ' “' + nickname + '” ' + surname;
};
var formatNameCurried = _.curry(formatName);

var james = formatNameCurried('James');

console.log(james('Sinclair', 'Mad Hatter'));
//=> James “Mad Hatter” Sinclair

var jamesS = james('Sinclair');

console.log(jamesS('Dormouse'));
//=> James “Dormouse” Sinclair

console.log(jamesS('Bandersnatch'));
//=> James “Bandersnatch” Sinclair
