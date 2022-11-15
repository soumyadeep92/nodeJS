var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
s3 = new AWS.S3({apiVersion: '2006-03-01'});
var bucketParams = {
  Bucket : 'nobucket23948585'
};
var params = {
  Bucket: "nobucket23948585", 
  VersioningConfiguration: {
   MFADelete: "Disabled", 
   Status: "Enabled"
  }
};
s3.createBucket(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success creating", data.Location);
  }
});
s3.putBucketVersioning(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success Versioning", data.Location);
  }
});