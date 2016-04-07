var _ = require('ramda');

var poem = 'Twas brillig, and the slithy toves\n' +
    'Did gyre and gimble in the wabe;\n' +
    'All mimsy were the borogoves,\n' +
    'And the mome raths outgrabe.';
/*
var nohowContrariwise = function(x) {
    return nohow(contrariwise(x));
};

var replace = function(find, replacement, str) {
    return _.replace(find, replacement);
};

var wrapWith = function(tag, str) {
    return '<' + tag + '>' + str + '</' + tag + '>';
};

var addBreaks      = _.partial(replace, '\n', '<br/>\n');
var replaceBrillig = _.partial(replace, 'brillig', 'four o’clock in the afternoon');
var wrapP          = _.partial(wrapWith, 'p');
var wrapBlockquote = _.partial(wrapWith, 'blockquote');

var modifyPoem = _.compose(wrapBlockquote, wrapP, addBreaks, replaceBrillig);

console.log(modifyPoem(poem));
//=> <blockquote><p>Twas four o’clock in the afternoon, and the slithy toves<br/>
//   Did gyre and gimble in the wabe;<br/>
//   All mimsy were the borogoves,<br/>
//   And the mome raths outgrabe.</p></blockquote>

var modifyPoem = _.pipe(replaceBrillig, addBreaks, wrapP, wrapBlockquote);
*/

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
//=> <blockquote><p>Twas <em>four o’clock in the afternoon</em>, and the slithy toves<br/>
//   Did gyre and gimble in the wabe;<br/>
//   All mimsy were the borogoves,<br/>
//   And the mome raths outgrabe.</p></blockquote>


/*
function curry (fn) {
    var arity = fn.length;

    function given (argsSoFar) {
        return function helper () {
            var args             = Array.prototype.slice.call(arguments, 0);
            var updatedArgsSoFar = argsSoFar.concat(args);

            if (updatedArgsSoFar.length >= arity) {
                return fn.apply(this, updatedArgsSoFar);
            }
            else {
                return given(updatedArgsSoFar);
            }
        }
    }

    return given([]);
}
*/
