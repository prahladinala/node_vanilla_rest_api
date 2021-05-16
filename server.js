const http = require('http')
const products = require('./data/products.json')

// http.createServer((req, res) => { }).listen()

const server = http.createServer((req, res) => {
    // res.statusCode = 200
    // res.setHeader("Content-Type", 'text/html')
    // res.write('<h1>Hello World</h1>')
    // res.end()

    // res.writeHead(200, { 'Content-Type': 'application/json' })
    // res.write(JSON.stringify(products))
    // res.end()

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(products))
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
