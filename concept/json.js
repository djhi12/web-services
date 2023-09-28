/*
Node.js is well-suited for working with JSON (JavaScript Object Notation) data since JSON is a native data format in JavaScript. Node.js provides built-in support for parsing and serializing JSON data, making it easy to work with JSON in your applications. Here are some key concepts related to working with JSON in Node.js:
*/


// Parsing JSON: To parse JSON data in Node.js, you can use the JSON.parse() method. This method takes a JSON-formatted string as input and returns a JavaScript object.

const jsonString = '{"name": "John", "age": 30}';
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name); // Output: John
