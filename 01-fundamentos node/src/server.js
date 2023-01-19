import http, { createServer } from 'node:http'

const server = http.createServer((req, res) => {
    return res.end('hello world')
})

server.listen(3333)
