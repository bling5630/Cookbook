var _ = require('ramda');


/**
Perform the replace. If no `options.find` is supplied, the entire basename is replaced by `options.replace`.

@param {Object} options - Contains the file list and renaming options
@returns {Array} An array of ResultObject instances containing `before` and `after` info
*/
function replace(options){
  'use strict';
    var findRegex = regExBuilder(options),
        results = new Results();
    results.list = options.files.map(replaceSingle.bind(null, findRegex, options.replace));
    return results;
}
