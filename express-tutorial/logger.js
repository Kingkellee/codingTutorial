const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()

    /* If the current middleware function does not end the request-response cycle, it must call next() 
    to pass control to the next middleware function. Otherwise, the request will be left hanging. */
    
    console.log(method, url, time)
    
    next() 

}


module.exports = logger