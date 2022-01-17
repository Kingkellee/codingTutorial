const os = require('os')

// to see user info

const user = os.userInfo()
console.log(user);

// this method returns the system uptime
console.log(`The system has been running for: ${os.uptime()}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOS)