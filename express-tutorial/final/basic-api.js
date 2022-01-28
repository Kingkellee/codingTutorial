const express = require('express');

const { products } = require('./data')
const app = express();

// api's handle data using json 
app.get('/', (req, res)=>{
    res.json(products)
})

app.listen(5000, ()=>{
    console.log("Server Listening on Port 5000...")
})