const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Include CORS middleware to handle cross-origin requests if your frontend and backend are served from different origins
const { login } = require('./LoginPageValidation'); // Adjust the path as necessary
const dbConnection = require('./Database');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use CORS middleware to allow cross-origin requests

// Login route
app.post('/api/login', login);

app.post('/api/events', (req, res) => {
    const eventData = req.body;
    console.log(req.body.venueName)
    // console.log(req.body);
    const sql = 'INSERT INTO venue (club_id, event_date, start_time, end_time, event_name, venue_name) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [eventData.clubName, eventData.date, eventData.start, eventData.end, eventData.title, eventData.venueName];
  
    dbConnection.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error inserting event data:', err);
        res.status(500).json({ error: 'Error inserting event data' });
        return;
      }
      console.log('Event data inserted successfully');
      res.sendStatus(200);
    });
  });

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
