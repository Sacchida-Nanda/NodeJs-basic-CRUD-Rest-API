const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// Import Routes
const postsRoute = require('./routes/posts');

// Using Middleware
app.use(bodyParser.json());
app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to home page.');
});

// Database connection
mongoose.connect(process.env.DB_CONNECTION,
    () =>  console.log(`Connected to DB!`),
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Listening to the server
app.listen(process.env.PORT, () => console.log(`Port is running on http://localhost:${process.env.PORT}`));