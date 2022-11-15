var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
s3 = new AWS.S3({apiVersion: '2006-03-01'});
var params = {
  Bucket : 'nobucket23948585'
};
s3.listObjectVersions(params, function(err, data) {
    if (err)
    {
        console.log(err, err.stack);
    } 
    else
    {
        console.log(data);
    }           
});
