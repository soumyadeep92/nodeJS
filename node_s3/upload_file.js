var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
var s3 = new AWS.S3({apiVersion: '2006-03-01'});
var uploadParams = {Bucket: 'nobucket23948585'};
var file = 'file1.txt';
var fs = require('fs');
var fileStream = fs.createReadStream(file);
fileStream.on('error', function(err) {
  console.log('File Error', err);
});
uploadParams.Body = fileStream;
var path = require('path');
uploadParams.Key = path.basename(file);
uploadParams.Body="holahola"
s3.upload (uploadParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } if (data) {
    console.log("Upload Success", data.Location);
  }
});
