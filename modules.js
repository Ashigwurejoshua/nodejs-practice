//modules
const names = require('./names')
const sayHi = require('./utils')

const datas = require('./othermethod')
require('./sum')

console.log(datas)

//sayHi("Jane")
//sayHi(names.peter)
//sayHi(names.john)

//os module
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime
console.log(`The sytstem uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)

//path module