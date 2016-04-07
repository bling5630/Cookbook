var composeTwo = function(funcA, funcB) {
    return function(x) {
        return funcA(funcB(x));
    };
};

var nohow = function(sentence) {
    return sentence + ', nohow!';
};
var contrariwise = function(sentence) {
    return sentence + ' Contrariwise…';
};

var statement = 'Not nothin&amp;rsquo;';
//var nohowContrariwise = composeTwo(contrariwise, nohow);
//console.log(nohowContrariwise(statement));
//=> Not nothin&amp;rsquo;, nohow! Contrariwise…

var compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
        var i = start;
        var result = args[start].apply(this, arguments);
        i = i - 1;
        while (i >= 0) {
            result = args[i].call(this, result);
            i = i - 1;
        }
        return result;
    };
};

var nohowContrariwise = compose(contrariwise, nohow);

console.log(nohowContrariwise(statement));

var nohowContrariwise = function(x) {
    return nohow(contrariwise(x));
};
