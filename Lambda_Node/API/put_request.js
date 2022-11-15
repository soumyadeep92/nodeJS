const axios = require('axios')

const getBuckets = async () => {
  try {
    return await axios.put('https://2clk1qt6od.execute-api.ap-south-1.amazonaws.com/dev/object/touch.txt?text=holaholahowareyou');
  } catch (error) {
    console.error(error);
  }
}

const printBuckets = async () => {
  const bucks = await getBuckets()
  console.log(bucks);
}

printBuckets()