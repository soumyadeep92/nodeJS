'use strict';
const AWS = require("aws-sdk");
const { S3Client} =require("@aws-sdk/client-s3");
const clientParams = {
  region: "ap-south-1"
};
module.exports.submit = async (event) => {
  const s3 = new AWS.S3();
  const pathParams = event.pathParameters;
  const client = new S3Client(clientParams);
  const Key = pathParams.versionId || null;
  if (!Key) {
    throw new Error("Key not defined")
  }
  const params={
    Bucket: 'basicbucket23414344',
  };
  //const version="LrTBOo241ISwWUCDA6v3Rc4dUdXVD835";
  const c=[];
  const k=[];
  const myBuckets = await s3.listObjectVersions(params).promise();
  const erp=await recursiveSearch(myBuckets,"VersionId",c);
  const erp1=await recursiveSearch(myBuckets,"Key",k);
  const sel=[];
  for(var i=0;i<erp.length;i++)
  {
    if(Key===erp[i])
    {
      sel.push(erp1[i]);
    }else
    {
      continue;
    }
  }
  const params1={
    Bucket: 'basicbucket23414344',
    Key: sel[0]
  };
  const a1 = await s3.getObject(params1).promise();
  const response = {
    statusCode: 200,
    body: JSON.stringify({message:sel[0],output:a1},null,2)
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