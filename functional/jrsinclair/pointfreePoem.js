var _ = require('ramda');

var poem = 'Twas brillig, and the slithy toves\n' +
    'Did gyre and gimble in the wabe;\n' +
    'All mimsy were the borogoves,\n' +
    'And the mome raths outgrabe.';

var replace = _.curry(function(find, replacement, str) {
    var regex = new RegExp(find, 'g');
    return str.replace(regex, replacement);
});

var wrapWith = _.curry(function(tag, str) {
    return '<' + tag + '>' + str + '</' + tag + '>';
});

var modifyPoem = _.pipe(
    replace('brillig', wrapWith('em', 'four o’clock in the afternoon')),
    replace('\n', '<br/>\n'),
    wrapWith('p'),
    wrapWith('blockquote')
);

console.log(modifyPoem(poem));
