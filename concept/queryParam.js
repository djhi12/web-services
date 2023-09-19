/*
In Node.js, you can access query parameters from a URL using the built-in url module or with a web framework like Express.js. Query parameters are typically included in the URL after a question mark ? and are separated by ampersands &. For example, in the URL http://example.com/api/resource?param1=value1&param2=value2, param1 and param2 are query parameters.

Here's how you can work with query parameters using both the url module and Express.js:

Using the url Module (Core Node.js)
To parse query parameters using the url module in Node.js, you can follow these steps:

Import the url module.

Parse the URL containing the query parameters using url.parse() or new URL().
Access the query parameters using the query property of the parsed URL.
*/

const url = require('url');

const urlString = 'http://example.com/api/resource?param1=value1&param2=value2';

// Parse the URL
const parsedUrl = new URL(urlString);

// Access query parameters
const param1Value = parsedUrl.searchParams.get('param1');
const param2Value = parsedUrl.searchParams.get('param2');

console.log(param1Value); // 'value1'
console.log(param2Value); // 'value2'
