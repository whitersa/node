const http = require('http')

const host = 'localhost'
const port = 8000

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'text/csv')
    res.setHeader('Content-Disposition', 'attachment;filename=example.csv')
    res.writeHead(200)
    res.end(`id, name, email \n1, Whitersa, xxx@xx.com`)
}

const server = http.createServer(requestListener)
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}: ${port}`)
})