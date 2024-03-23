const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Include CORS middleware to handle cross-origin requests if your frontend and backend are served from different origins
const { login } = require('./LoginPageValidation'); // Adjust the path as necessary

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use CORS middleware to allow cross-origin requests

// Login route
app.post('/api/login', login);

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
