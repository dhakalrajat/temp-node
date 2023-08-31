const { log } = require('console');
const http = require('http');
//requuest and response
const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('Home Page')
    }
    else if (req.url === '/about'){
        res.write('Welcome to about Page')
        res.end()
    }
    else {
        res.end(`
        <h1> Resource not available</h1>
        <a href="/"> Back Home</a>
        `)
    }
})
server.listen(5000)