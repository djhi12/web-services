/*
- HTTP headers let the client and the server pass additional information with an HTTP request or response. 


- 
*/



// Working with HTTP Headers in a Node.js HTTP Server
const http = require('http');

const server = http.createServer((req, res) => {
    // Set response headers
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Custom-Header', 'Hello from Node.js');

    // Send a response with headers
    res.writeHead(200); // 200 OK status code
    res.end('Hello, World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// Parsing HTTP Headers from an Incoming Request
const http = require('http');

const server1 = http.createServer((req, res) => {
    // Access request headers
    const userAgent = req.headers['user-agent'];
    const contentType = req.headers['content-type'];

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`User-Agent: ${userAgent}\nContent-Type: ${contentType}\n`);
});

const PORT1 = 3000;
server1.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT1}`);
});
