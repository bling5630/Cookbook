var _ = require('lodash');

var data = ["12%", "agi", "cheppers", "devops"];

function transformDataToJSON(content) {
var output = [];

    output.push({
      fee: content[0],
      name: content[1],
      company: content[2],
      role: content[3],
    });
  return output;
}

console.log(transformDataToJSON(data));
