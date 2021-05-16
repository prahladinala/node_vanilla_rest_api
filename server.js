const http = require('http')

// http.createServer((req, res) => { }).listen()

const server = http.createServer((req, res) => {
    console.log(123)
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
