var http = require('http');
var fs = require('fs')


http.createServer((req, res)=>{

    const stream = fs.createReadStream('./content/big-text.txt', 'utf8')
    stream.on('open', ()=>{
        // the pipe method converts a readable stream into a writeable stream
        // response objects could also be passed as a writable stream using pipe
        stream.pipe(res)
    })

    stream.on('error', (err)=>{
        res.end(err)
    })
}).listen(5000, ()=>{
    console.log("now listening on port 5000...")
})

