const express = require('express');
const app = express()

/*Middleware functions are functions that have access to the request object (req), the response object (res), 
and the next middleware function in the application’s request-response cycle.*/

// Middleware functions can perform the following tasks:

//     Execute any code.
//     Make changes to the request and the response objects.
//     End the request-response cycle.
//     Call the next middleware function in the stack.

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()

    /* If the current middleware function does not end the request-response cycle, it must call next() 
    to pass control to the next middleware function. Otherwise, the request will be left hanging. */
    
    next() 

    console.log(method, url, time)
}

app.get('/', logger, (req, res)=>{
    res.send('Home')
})

app.get('/about', logger, (req, res)=>{
    res.send('About Page')
})

app.listen(5000, ()=>{
    console.log("Listening on Port 5000...")
})