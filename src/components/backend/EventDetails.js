const dbConnection = require('./Database');


// Middleware
app.use(bodyParser.json());

// Endpoint to add event data to the database
app.post('/api/events', (req, res) => {
  const eventData = req.body;
  const sql = 'INSERT INTO venue (club_id, event_date, start_time, end_time, event_name, venue_name) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [eventData.clubId, eventData.eventDate, eventData.startTime, eventData.endTime, eventData.eventName, eventData.venueName];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting event data:', err);
      res.status(500).json({ error: 'Error inserting event data' });
      return;
    }
    console.log('Event data inserted successfully');
    res.sendStatus(200);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
