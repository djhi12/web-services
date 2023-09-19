/*
In Node.js, you can make a GET request to a remote server or API using the built-in http or https modules, or you can use popular third-party libraries like axios or node-fetch to simplify the process. Below, I'll show you both approaches.


Using the http or https Modules (Core Modules):

You can use the core http or https modules to make a GET request. Here's an example using the https module:
*/

const https = require('https');

const url = 'https://example.com';

https.get(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        console.log(data);
    });
}).on('error', (error) => {
    console.error(`Error: ${error.message}`);
});
