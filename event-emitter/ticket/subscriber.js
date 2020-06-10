const TicketManager = require('./manager')

const ticketManager = new TicketManager(10)

ticketManager.on('buy', () => {
    console.log('one ticket was sold!')
})

ticketManager.buy('xxx@xx.com', 20)
ticketManager.buy('xxx@xx.com', 20)

ticketManager.once('buy', () => {
    console.log('This is only called once')
})

ticketManager.buy('xxx@xx.com', 20)
ticketManager.buy('xxx@xx.com', 20)