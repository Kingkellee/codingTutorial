// How to read and write file-Asynchronous Approach
const {readFile, writeFile, read} = require('fs')

// the readFile takes in as argument a path and a call back funnction
// the callback function takes an error, and the result as parameters

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if (err) {
        console.log(err)
        return
    }
    const first = result
    
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err){
            console.log(err)
            return
        }
        const second = result
        console.log(second)

        writeFile('./content/result-async.txt', 
        `This is the result of writeFileSync: ${first} and ${second}`,
        (err, result)=>{
            if (err){
                console.log(err)
                return 
            }
            console.log (result)
        }
        )
    })


})

