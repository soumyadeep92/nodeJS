const https = require('https')

const request=require('request');
const options = {
  hostname: '2dgye4ame4.execute-api.ap-south-1.amazonaws.com',
  port: 443,
  path: '/dev/buckdelete/w4dRYBzCxjZupOiioq5r0nEvxAEFDee.',
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
}
let data = '';
const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)



  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('close', () => {
    console.log('Retrieved all data');
    console.log(JSON.parse(data));
  });
});
req.on('error', (err) => {
  console.error(`Encountered an error trying to make a request: ${err.message}`);
});
req.end();