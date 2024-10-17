const express = require('express');
const data = require('./data'); // Make sure this file contains the products array
const app = express();

// Parse request body using middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, it\'s my first Express app');
});


// Start the server
app.listen(3000, 'localhost', () => {
    console.log('Server is running on http://localhost:3000');
});
