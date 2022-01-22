// destructure file system to get the readFile method
const {readFile} = require('fs')

//using Promises 
// set up a call back function
const getText = (path)=>{
    // return new promise
    return new Promise((resolve, reject)=>{
        // promises takes two arguments, resolve and reject
        readFile(path, 'utf8', (err, data)=>{
            // remember the readFile method takes a path, enconding and a callback function with the err and data as argument
            if (err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    }) 
    
}

getText('./content/first.txt')
    .then((result)=>{console.log(result)})
    .catch((err)=>{console.log(err)})