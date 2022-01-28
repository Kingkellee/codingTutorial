const express = require('express');

//import path 
const path = require('path');

const app = express();

// app.use to load static or middlewares, 
// express.static methods use to load static directory, takes in a path
app.use(express.static('./public'));

// use sendFile to transfer the file at the given path
// you can dump the index.html in the public folder, and the code stills run
// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// })

// other ways to run the index.html/Public Static file is by using Server Side Rendering (SSR)

app.all('*', (req, res)=>{
    res.status().send("Resource not Found");
})



app.listen(5000, ()=>{
    console.log("Now Listening on Port 5000... ");
})