const http = require('http')

// const server = http.createServer((req, res)=>{
//    res.end('welcome')
// })

// USING EVENT EMITTER API
const server = http.createServer()
// emits request events
// subscribe to it/ listen to it/ respond to it

server.on('request', (res, req)=>{
    res.end('welcome')
})

server.listen(5000)