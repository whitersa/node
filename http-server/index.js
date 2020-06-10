const http = require('http')

const host = 'localhost'
const port = 8000

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.writeHead(200)
    res.end(`<html><body><h1>Whitersa</h1></body></html>`)
}

const server = http.createServer(requestListener)
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}: ${port}`)
})