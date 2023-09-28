const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();

app.use(express.json());

app.post('/register', [
    body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isStrongPassword().withMessage('Password must be strong'),
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Process registration if validation passes
    // ...
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
