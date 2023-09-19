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
