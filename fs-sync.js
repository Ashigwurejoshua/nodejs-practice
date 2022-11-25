const { readFileSync, writeFileSync } = require('fs')

const firstTextFile = readFileSync('./content/first.txt', 'utf8')
const secondTextFile = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/resultpage.txt',
    `Here is the result: ${firstTextFile}, ${secondTextFile}`, { flag: 'a' })