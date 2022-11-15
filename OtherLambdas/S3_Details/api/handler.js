'use strict';
const AWS = require("aws-sdk");
module.exports.submit = async (event) => {
  const s3 = new AWS.S3();
  const params={
    Bucket: 'mecket2'
  };
  const myBuckets = await s3.listObjectsV2(params).promise();


  const response = {
    statusCode: 200,
    body: JSON.stringify(myBuckets)
  };
  return response;
};