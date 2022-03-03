// WRITE NODE.JS CODE TO SHOW QUERYSITRNG DEMO.

const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Feel free to add query parameters to the end of the url');
})

server.listen(3000);