const { createReadStream } = require('fs');

const stream = createReadStream('./content/big-text.txt', {highWaterMark: 90000});
// default buffer size is 64kb
// last buffer is remainder 
// highWaterMark conrols size

stream.on('data', (result)=>{
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err)
})
