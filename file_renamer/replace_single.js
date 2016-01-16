var _ = require('ramda');

/**
Search globally by default. If `options.regex` is not set then ensure any special regex characters in `options.find` are escaped. Do nothing if `options.find` is not set.
*/
function regExBuilder(options){
    if (options.find){
        var re = options.regex ? options.find : s.escapeRegExp(options.find),
            reOptions = "g" + (options.insensitive ? "i" : "");
        return new RegExp(re, reOptions);
    }
}

function replaceSingle(findRegex, replace, file){

  'use strict';
  //var findRegex = regExBuilder(options);

    var result = new Result({ before: path.normalize(file) }),
        dirname = path.dirname(file),
        basename = path.basename(file);

    if(findRegex){
        if (basename.search(findRegex) > -1){
            basename = basename.replace(findRegex, replace);
            result.after = path.join(dirname, basename);
        } else {
            /* leave result.after blank, signifying no replace was performed */
        }
    } else {
        result.after = path.join(dirname, replace);
    }

    return result;
}
