const { query } = require('express');
const express = require('express');

const { products } = require('./data')
const app = express();

/* while the req.params is an object inside the request object, 
and only contains any parameters passed to the route */

/* the query is also an object but it contains only the keys and values
related to the query on the request route */

app.get('/api/v1/query', (req, res)=>{
    console.log(req.query)
    res.send(`The result of query is: ${JSON.stringify(req.query)} `)
})

app.get('/api/v2/query', (req, res)=>{
    
    const {search, limit} = req.query
    let sortedProducts = [...products]
    if (search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        }) 
    }

    if(limit){
        sortedProducts = sortedProducts.splice(0, Number(limit))
    }
    
    if(sortedProducts.length < 1) {
        // res.status(200).send("No reuslt matched your Search")
        return res.status(200).json({'success': true, 'data': [] })
    }
    
    res.status(200).json(sortedProducts)
})


app.listen(5000, ()=>{
    console.log("Server Listening on Port 5000...")
})