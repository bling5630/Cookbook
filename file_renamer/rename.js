var _ = require('ramda');

/**
Takes a Results collection in, performs the rename on disk setting `renamer` and `error` as appropriate
@param {Results} results - the Results collection to operate on
@returns {Results} results
*/
function rename(results){
  'use strict';
    results.list = results.list.map(function(result){
        if (!result.after){
            result.renamed = false;
            result.error = "no change";
            return result;
        }
        try {
            if (fs.existsSync(result.after)){
                result.renamed = false;
                result.error = "file exists";
            } else {
                fs.renameSync(result.before, result.after);
                result.renamed = true;
            }
        } catch(e){
            result.renamed = false;
            result.error = e.message;
        }
        return result;
    });
    return results;
}
