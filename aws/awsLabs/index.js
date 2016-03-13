var AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: '',
    secretAccessKey: ''
  });

AWS.config.update({
    region: 'us-east-1'
  });

// Create a bucket and put something in it.
var s3 = new AWS.S3();
    s3.client.createBucket({Bucket: 'myBucket'})
    .done(function(resp) {
var data = {
            Bucket: 'myBucket',
            Key: 'myKey',
            Body: 'Hello!'
          };
    s3.client.putObject(data)
    .done(function(resp) {
        console.log("Successfully uploaded data to myBucket/myKey");
  });
});
