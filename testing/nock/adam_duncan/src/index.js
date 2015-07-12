var request = require('request');

module.exports = function makeRequest(callback) {
  request('http://www.medium.com/', function (error, xhr, response) {
    callback(error, response);
  });
};