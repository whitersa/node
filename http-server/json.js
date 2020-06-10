const http = require('http')

const host = 'localhost'
const port = 7000

const artWorks = JSON.stringify([
    {
        title: `JoJo's bizarre adventure`,
        author: `Araki Hirohiko`
    },
    {
        title: `CowBoy Bebop`,
        author: `Shin'ichirô Watanabe`
    },
    {
        title: `Castlevania`,
        author: `Netflix`
    }
])

const authors = JSON.stringify([
    {
        name: `Araki Hirohiko`,
        country: `Japan`
    },
    {
        name: `Shin'ichirô Watanabe`,
        country: `Japan`
    },
    {
        name: `Netflix`,
        country: `America`
    }
])

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    switch (req.url) {
        case '/books':
            res.writeHead(200)
            res.end(artWorks)
            break
        case '/authors':
            res.writeHead(200)
            res.end(authors)
            break
        default: 
            res.writeHead(404)
            res.end(JSON.stringify({error: 'Resource not found'}))
    }
}

const server = http.createServer(requestListener)
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}: ${port}`)
})