var ApiBuilder = require('claudia-api-builder'),
    api = new ApiBuilder();

module.exports = api;

AWS.config.update({
  "accessKeyId": "AKIAJ6LP6ZQPL5IBIKBA",
  "secretAccessKey": "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",
}
);

AWS.config.update({
    region: 'eu-west-1'
  });


api.get('/hello', function() {
    'use strict';
    return 'hi there';
});
