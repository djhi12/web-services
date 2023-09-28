/*
Node.js is well-suited for working with JSON (JavaScript Object Notation) data since JSON is a native data format in JavaScript. Node.js provides built-in support for parsing and serializing JSON data, making it easy to work with JSON in your applications. Here are some key concepts related to working with JSON in Node.js:
*/


// Parsing JSON: To parse JSON data in Node.js, you can use the JSON.parse() method. This method takes a JSON-formatted string as input and returns a JavaScript object.

const jsonString = '{"name": "John", "age": 30}';
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name); // Output: John


// Serializing JSON: To convert a JavaScript object into a JSON-formatted string, you can use the JSON.stringify() method. This method takes a JavaScript object as input and returns a JSON string.

const person = { name: "Alice", age: 25 };
const jsonString1 = JSON.stringify(person);
console.log(jsonString1); // Output: {"name":"Alice","age":25}


// Reading JSON Files: Node.js can read JSON data from files using the built-in fs (File System) module. You can read a JSON file and then parse its content into a JavaScript object.

const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const jsonObj = JSON.parse(data);
    console.log(jsonObj);
});


// Writing JSON Files: Similarly, you can write JSON data to a file by first converting a JavaScript object to a JSON string and then using the fs.writeFile() method.

const fs = require('fs');

const data = { name: 'Bob', age: 35 };
const jsonString2 = JSON.stringify(data);

fs.writeFile('output.json', jsonString2, 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data has been written to output.json');
});


// Working with JSON APIs: Node.js is commonly used to interact with web services and APIs that provide data in JSON format. You can use libraries like axios or the built-in http module to make HTTP requests and process JSON responses from APIs.

const axios = require('axios');

axios.get('https://api.example.com/data')
    .then((response) => {
        const jsonData = response.data;
        console.log(jsonData);
    })
    .catch((error) => {
        console.error(error);
    });

// In summary, Node.js provides easy-to-use functionality for parsing, serializing, reading, and writing JSON data. This makes it a powerful choice for building applications that work with JSON-based data formats, which are common in web development and data exchange between systems.