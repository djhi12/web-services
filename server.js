const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// Configure Passport
passport.use(new GoogleStrategy({
    clientID: 'YOUR_CLIENT_ID',
    clientSecret: 'YOUR_CLIENT_SECRET',
    callbackURL: '/auth/google/callback'
},
    (accessToken, refreshToken, profile, done) => {
        // You can handle user data and store it in your database here
        return done(null, profile);
    }
));

// Serialize and deserialize user data
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// Set up Express middleware
app.use(require('express-session')({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Define routes
app.get('/', (req, res) => {
    res.send('<h1>OAuth Example</h1><a href="/auth/google">Login with Google</a>');
});

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] })
);

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/profile');
    }
);

app.get('/profile', (req, res) => {
    res.send(`<h1>Welcome, ${req.user.displayName}!</h1><a href="/logout">Logout</a>`);
});

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
