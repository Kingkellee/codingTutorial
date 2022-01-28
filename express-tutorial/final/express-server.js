// import the express module
const express = require('express')
// declare the express module
const app = express()

app.get('/', (req, res)=>{
    res.status(200).send("Welcome to the Home page")
})

app.get('/about', (req, res)=>{
    res.status(200).send("About Page")
})

app.all('*', (req, res)=>{
    res.status(404).send("Resource Not Found")
})

app.listen(5000, ()=>{
    console.log("Listening on Port 5000....")
})


// Http Verbs are as listed 
// app.get ---------- retrieve data
// app.post --------- submit data
// app.put ---------- insert data
// app.delete --------- remove data

// other http methods are 
// app.all ----------- matches all HTTP Verbs mapping “global” logic for specific path prefixes or arbitrary matches
// app.use ---------- mounting middleware at the specified path
// app.listen 