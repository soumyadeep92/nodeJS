const https = require('https');

let request = https.get('https://lnat2kyiul.execute-api.ap-south-1.amazonaws.com/dev/buck/basicbucket23414344', (res) => {
  if (res.statusCode !== 200) {
    console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
    res.resume();
    return;
  }

  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('close', () => {
    console.log('Retrieved all data');
    console.log(JSON.parse(data));
  });
});
request.on('error', (err) => {
  console.error(`Encountered an error trying to make a request: ${err.message}`);
});