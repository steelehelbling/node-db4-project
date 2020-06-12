const server = require('./server')

const PORT = 9393;
server.listen(PORT, () => {
    console.log(`Server is Listening on ${PORT}`)
})