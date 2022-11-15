const { S3Client} =require("@aws-sdk/client-s3");
const config = require('./../config.example.json');
const aws=require('aws-sdk');
const s3=new aws.S3();
const prePath = 'signed-url-demo/'
const clientParams = {
  region: config.REGION
}



module.exports.createupload = async (event) => {

  const pathParams = event.pathParameters;
  const client = new S3Client(clientParams);
  const Key = pathParams.fileName || null;
  if (!Key) {
    throw new Error("Key not defined")
  }
  var params = {
    Bucket: config.S3_BUCKET
  }
  const getObjectParams1 = {
    Bucket: config.S3_BUCKET,
    Key: `${prePath}${Key}`,
    Body: ''
  }
  //const a1=await s3.createBucket(params).promise();
  await s3.putBucketVersioning({Bucket: config.S3_BUCKET, VersioningConfiguration: {MFADelete: "Disabled", Status: "Enabled"}}).promise();
  const a2=await s3.upload(getObjectParams1).promise();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
          message: "Successfully uploaded the file to S3",
          output: a2
      },
      null,
      2
    ),
  };
};
