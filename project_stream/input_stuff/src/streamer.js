var _ = require('lodash');


function streamer(items, callback) {
  'use strict';

  console.log(transformDataToJSON(items));
}

function transformDataToJSON(content) {
	'use strict';
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

module.exports = streamer;
