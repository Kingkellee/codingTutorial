const http = require('http')

//   the createserver method looks in for a callback function
//  the callback function we have two parameters(obj)
//  common practise is to name the obj-parameters as req and res
// the req represent an incoming request(you will have an information about the method in the request object)
// res is the response we are returning to
 const server = http.createServer((req, res)=>{
    // res.write('Welcome to my Node Project')
    // res.end()
    if (req.url ==='/'){
        res.end("Welcome to my page")
    } else if (req.url ==='/about'){
        res.end("Here is a brief History about me")
    } else {
        res.end(
            `
            <h1> OOPS!!! </h1>
            <p> We cant seem to find the page you are looking for</p>
            <p> You can try navigating to our Homepage <a href="/">go Home</a></p>
            `
        )
    }
 })

 
//to setup the port our server will be listening to  
server.listen(5000)
