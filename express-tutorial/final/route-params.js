const express = require('express');

const { products } = require('./data')
const app = express();

app.get('/', (req, res)=>{
    res.send("<h1> HomePage <a href='/api/products'>Products</a>")
})

app.get('/api/products', (req, res) => {
    // .map() method is commonly used to apply some changes to the elements,
    //  it takes a call back function and returns the element needed to be changed
    //  the syntax is arr.map(function(element, index, array){  }, this);
    //  the syntax is arr.map((element, index, array)=>{}, this);
    newProducts = products.map((product)=>{
        const {id, name, image } = product
        
        return {id, name, image}
    })
    
    res.json(newProducts)
})

// Routing refers to how an application’s endpoints (URIs) respond to client requests.

/*Route parameters are named URL segments that are used to capture 
the values specified at their position in the URL. 
The captured values are populated in the req.params object, 
with the name of the route parameter specified in the path as their respective keys. */

app.get('/api/products/:productID', (req, res)=>{
   
    // console.log(req)
    // console.log(req.params)

    const { productID } = req.params

    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    )
    
    if (!singleProduct){
        return res.status(404).send("Product does not Exists")
    }
    res.json(singleProduct)
})

app.get('/api/products/:productID/review/:reviewID', (req, res)=>{
    console.log(req.params)
    res.send("This Product is Amazing")
})

app.listen(5000, ()=>{
    console.log("Server Listening on Port 5000...")
})