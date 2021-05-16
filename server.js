const http = require('http')

// http.createServer((req, res) => { }).listen()

const server = http.createServer((req, res) => {
    // console.log(123)
    res.statusCode = 200
    res.setHeader("Content-Type", 'text/html')
    res.write('<h1>Hello World</h1>')
    res.end()
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
