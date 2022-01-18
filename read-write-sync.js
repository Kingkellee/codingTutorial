// How to read and write file-Synchronous Approach

// using destructuring to access methods from the fs-object
const {readFileSync, writeFileSync} = require('fs')

// the readFileSync method is used to perform read operation
// it takes a path, enconding and optional flag

const first = readFileSync('./content/first.txt', 'utf8')

const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

// to create a new file, we use the writeFileSync, if the file does not exist node creates a new file
// if the file exist, node by default overwrites the file 
// the writeFileSync takes a path, the value you want to pass and optional flag

writeFileSync('./content/result-sync.txt', `This is the result of writeFileSync: ${first} and ${second}`)