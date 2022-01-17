//   GLOBALS - NO WINDOWS !!!!

//      __dirname       - path to current directory
//      __filename      - file name
//      require         - function to use modules (CommonJS)
//      process         - info about env where the program is being executed

//  to access the module, we use the global function require, it take the dir of the module path

const names = require('./name')
const sayHi = require('./utils')


sayHi(names.john)
sayHi(names.peter)
sayHi(names.kelly)