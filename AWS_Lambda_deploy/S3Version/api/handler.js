const { S3Client} =require("@aws-sdk/client-s3");
const aws=require('aws-sdk');
const s3=new aws.S3();
const clientParams = {
  region: "ap-south-1"
};
module.exports.submit = async (event) => {
  const pathParams = event.pathParameters;
  const client = new S3Client(clientParams);
  const Key = pathParams.fileName || null;
  if (!Key) {
    throw new Error("Key not defined")
  }
  const l1=[];
  var objs=await s3.listObjects({Bucket:Key}).promise();
  const o1=await recursiveSearch(objs,"Key",l1);
  let version_obj=[];
  for(var j=0;j<o1.length;j++)
  {
        await s3.putBucketVersioning({Bucket: Key, VersioningConfiguration: {MFADelete: "Disabled", Status: "Enabled"}}).promise();
        version_obj.push(await s3.listObjectVersions({Bucket:Key,Prefix:o1[j]}).promise());          
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify({output:version_obj},null,2)
  };
  return response;
};
const recursiveSearch = (obj, searchKey, results = []) => {
   const r = results;
   Object.keys(obj).forEach(key => {
      const value = obj[key];
      if(key === searchKey && typeof value !== 'object'){
         r.push(value);
      }else if(typeof value === 'object'){
         recursiveSearch(value, searchKey, r);
      }
   });
   return r;
};