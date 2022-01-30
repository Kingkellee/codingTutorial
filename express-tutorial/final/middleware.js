const express = require('express')
const app = express()
const morgan = require('morgan') // third-party middleware
const logger = require('./logger') //self-created middleware
const authorize = require('./authorize') //self-created middleware

// app.use([logger, authorize])  // must be refrenced before app.get
// if a path is passed, the middleware works on routes with same path
// multiple middleware are passed as an array

// app.use(express.static('./public'));     // static method is a built-in express middleware

app.use(morgan('tiny'))

app.get('/', (req, res)=> {
    res.send('Home')
})

app.get('/about', (req, res)=> {
    res.send('About')
})

app.get('/api/products', (req, res)=> {
    res.send('Products')
})

app.get('/api/comments', (req, res)=> {
    res.send('Comments')
})

app.listen(5000, ()=>{
    console.log("Listening on Port 5000...")
})