var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
s3 = new AWS.S3({apiVersion: '2006-03-01'});
var paramsObject = {
    Bucket: 'nobucket23948585', 
    Key: 'file1.txt', 
    VersionId: 'wFn7KZAFzgSIJshU9Z4Tnmxcpl7Kr9Df'
};
s3.getObject(paramsObject, function(err, data) {
  if (err) 
  {
      console.log(err, err.stack); 
  }else
  {
    console.log(data);
  }     
});