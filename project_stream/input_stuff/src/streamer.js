var _ = require('lodash');


function streamer(item, callback) {
  'use strict';
  function transformDataToJSON(content) {
  	var output = [];

  	_.forIn(content, function(value, key) {
  		output.push({
  			fee: content[0],
  			name: content[1],
  			company: content[2],
  			role: content[3]
  		});
  	});
  	return output;
  }
  //console.log(transformDataToJSON(item));
  callback(transformDataToJSON(item));
}



module.exports = streamer;
