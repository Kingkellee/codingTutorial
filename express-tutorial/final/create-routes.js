const { application } = require('express')
const express = require('express')
const people = require('./routes/people') //to use routes, you must first import routes
const auth = require('./routes/auth')
const app = express()

app.use(express.static('./methods-public')) //setting up a public static assest
app.use(express.urlencoded({extended: false})) 

/* To use the router module in our main app file we first require() the route module. 
We then call use() on the Express application to add the Router to the middleware handling path, 
specifying a URL path.
*/

app.use(express.json()) //parce json
//get method used to read data 

app.use('/api/people', people)

app.use('/login', auth)


app.listen(5000, ()=>{
    console.log('Listening on Port 5000...')
})