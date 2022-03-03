// WRITE NODE.JS CODE TO CREATE SERVER AND DISPLAY YOUR NAME ON BROWSER.

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<div style="color: red; text-align: center; font-size: 4rem;"> Naresh Sharma </div>');
});

server.listen(3000);