// Load the SDK and UUID
var AWS = require('aws-sdk');
var config = require('./config.json');
var uuid = require('node-uuid');

AWS.config = new AWS.Config({
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1'
});

// Create an S3 client
var s3 = new AWS.S3();

// Create a bucket and upload something into it
var bucketName = 'node-sdk-sample-' + uuid.v4();
var keyName = 'FML.txt';

s3.createBucket({Bucket: bucketName}, function() {
  var params = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
  s3.putObject(params, function(err, data) {
    if (err)
      console.log(err);
    else
      console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
  });
});
