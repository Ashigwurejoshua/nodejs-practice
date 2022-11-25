const http = require('http')

const server = http.createServer((req, res) => {
    // res.writeHead(200, {
    //     'Content-Type': 'text/plain'
    // });

    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is our short story')
    }
    res.end(`
        <h1>Oop!</h1>
        <p>We can't seem to find the page you're looking for</p>
        <a href='/'>home page</a>
    `)
        // res.write('welcome to our home page')
        // res.end()
})

server.listen(5000)