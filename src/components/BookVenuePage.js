import React, { useState } from 'react';

const BookVenuePage = () => {
  // State variables to store form input values
  const [clubName, setClubName] = useState('');
  const [facultyInCharge, setFacultyInCharge] = useState('');
  const [eventName, setEventName] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [venueBooked, setVenueBooked] = useState('');
  const [logisticsDemanded, setLogisticsDemanded] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending the form data to a server
    // For now, let's just log the form data to the console
    console.log({
      clubName,
      facultyInCharge,
      eventName,
      duration,
      description,
      venueBooked,
      logisticsDemanded
    });
    // Clear form fields after submission
    clearFormFields();
  };

  // Function to clear form fields after submission
  const clearFormFields = () => {
    setClubName('');
    setFacultyInCharge('');
    setEventName('');
    setDuration('');
    setDescription('');
    setVenueBooked('');
    setLogisticsDemanded('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Book Venue Page</h1>
      <form onSubmit={handleSubmit}>
        <label style={styles.label}>
          Club Name:
          <input type="text" style={styles.input} value={clubName} onChange={(e) => setClubName(e.target.value)} />
        </label>
        <br />
        <label style={styles.label}>
          Club Faculty Incharge:
          <input type="text" style={styles.input} value={facultyInCharge} onChange={(e) => setFacultyInCharge(e.target.value)} />
        </label>
        <br />
        <label style={styles.label}>
          Event Name:
          <input type="text" style={styles.input} value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </label>
        <br />
        <label style={styles.label}>
          Duration:
          <input type="text" style={styles.input} value={duration} onChange={(e) => setDuration(e.target.value)} />
        </label>
        <br />
        <label style={styles.label}>
          Description:
          <textarea style={styles.input} value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label style={styles.label}>
          Venue Booked:
          <input type="text" style={styles.input} value={venueBooked} onChange={(e) => setVenueBooked(e.target.value)} />
        </label>
        <br />
        <label style={styles.label}>
          Logistics Demanded:
          <textarea style={styles.input} value={logisticsDemanded} onChange={(e) => setLogisticsDemanded(e.target.value)} />
        </label>
        <br />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default BookVenuePage;
