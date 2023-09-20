/*
In the context of Node.js and web development, URI hierarchies refer to the structure and organization of Uniform Resource Identifiers (URIs) within a web application. URIs are used to identify and locate resources on the web, and they often correspond to the paths or routes within a web application.

Here's a breakdown of the concept of URI hierarchies in Node.js:


URI (Uniform Resource Identifier):
A URI is a string that uniquely identifies a resource on the web. It can be in the form of a URL (Uniform Resource Locator) or a URN (Uniform Resource Name).

Examples of URIs:

URL: https://example.com/products/123
URN: urn:isbn:0451450523


URI Hierarchy:
URI hierarchy refers to the structure and organization of URIs within a web application.

In the context of Node.js and web routing, URI hierarchies are often used to define the routes or endpoints that handle specific requests.

For example, in a Node.js web application, you might have URI hierarchies like:

/: The root URI that corresponds to the homepage.

/products: A URI hierarchy for product-related resources.

/products/123: A specific product resource identified by its unique identifier (e.g., product with ID 123).

/users: A URI hierarchy for user-related resources.

/users/johndoe: A specific user resource identified by their username (e.g., user with the username "johndoe").


Routing:
In Node.js web applications, URI hierarchies are typically associated with routing. Routing is the process of determining how an incoming HTTP request should be handled based on the requested URI.

Node.js web frameworks like Express.js provide routing mechanisms that allow you to define routes for different URI patterns and specify the corresponding actions or handlers (e.g., functions or controllers) to execute when a request matches a specific URI.

Example (using Express.js):

*/

const express = require('express');
const app = express();

// Define a route for the root URI
app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});

// Define a route for the /products URI hierarchy
app.get('/products', (req, res) => {
    res.send('List of products');
});

// Define a route for a specific product (e.g., /products/123)
app.get('/products/:productId', (req, res) => {
    const productId = req.params.productId;
    res.send(`Product ID: ${productId}`);
});

// Define routes for user-related resources
app.get('/users', (req, res) => {
    res.send('List of users');
});

app.get('/users/:username', (req, res) => {
    const username = req.params.username;
    res.send(`User: ${username}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


/*
In this example, we define URI hierarchies for the root, products, and users, and specify different route handlers for each URI pattern.

URI hierarchies and routing are fundamental concepts in web development using Node.js, as they help organize and manage the flow of requests and responses within a web application.
*/