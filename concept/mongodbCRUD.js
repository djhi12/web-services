/*
Node.js is a runtime environment that allows you to run JavaScript code on the server-side. MongoDB is a popular NoSQL database that stores data in a flexible, JSON-like format. When working with Node.js and MongoDB, you often perform CRUD operations, which stand for Create, Read, Update, and Delete. These operations allow you to interact with and manipulate data in the MongoDB database using Node.js.
*/

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb+srv://djidorot:Mongodb.12@cluster0.7es8ihy.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection string

// Create a new MongoDB client
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect((err) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    console.log('Connected to MongoDB');

    const db = client.db('mydb'); // Replace with your database name

    // Perform CRUD operations here

    // 1. Create (Insert)
    const newUser = { name: 'John', age: 30 };
    db.collection('users').insertOne(newUser, (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
        } else {
            console.log('User inserted:', result.ops);
        }

        // 2. Read (Query)
        db.collection('users').find({ name: 'John' }).toArray((err, users) => {
            if (err) {
                console.error('Error finding users:', err);
            } else {
                console.log('Users:', users);

                // 3. Update
                const query = { name: 'John' };
                const update = { $set: { age: 31 } };
                db.collection('users').updateOne(query, update, (err, result) => {
                    if (err) {
                        console.error('Error updating user:', err);
                    } else {
                        console.log('User updated:', result.modifiedCount);

                        // 4. Delete
                        db.collection('users').deleteOne(query, (err, result) => {
                            if (err) {
                                console.error('Error deleting user:', err);
                            } else {
                                console.log('User deleted:', result.deletedCount);
                            }

                            // Close the MongoDB connection
                            client.close();
                        });
                    }
                });
            }
        });
    });
});
