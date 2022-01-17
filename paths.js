const path = require('path')
const { text } = require('stream/consumers')

// separator that returns a platform specific separator
console.log(path.sep)

// join method joins a sequence of path segment using the platform separator as the limiter
// it also returns a normalize resulting path

const filePath = path.join('/content/', 'subfolder', 'text.txt')
console.log(filePath)

// to access the base name
const base = path.basename(filePath)
console.log(base)

// to return an absolute path use path.resolve
//  resolve accepts a sequence of paths and resolve it to an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)