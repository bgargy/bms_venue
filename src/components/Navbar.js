import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here, such as clearing user session or local storage
    // For simplicity, let's just redirect back to the login page
    navigate('/'); // Redirect to login page after logout
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/home" style={linkStyle}>Home</Link>
        </li>
        <li style={liStyle}>
          <Link to="/book-venue" style={linkStyle}>Book Venue</Link>
        </li>
        <li style={liStyle}>
          <Link to="/confirm-letter" style={linkStyle}>Confirm Letter</Link>
        </li>
        <li style={{ marginLeft: 'auto', ...liStyle }}> {/* This will push the logout button to the right */}
          <button onClick={handleLogout} style={logoutButtonStyle}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}

// Styles
const navStyle = {
  background: '#000', // Black background
  padding: '10px 0', // Add some padding to the nav
}

const ulStyle = {
  listStyleType: 'none', // Remove default list styles
  margin: 0,
  padding: 0,
  display: 'flex', // Use flexbox layout
}

const liStyle = {
  margin: '0 20px', // Add some margin between list items
}

const linkStyle = {
  color: '#fff', // Set text color to white
  textDecoration: 'none', // Remove underline from links
  fontSize: '18px', // Set font size
  fontFamily: 'Poppins, sans-serif', // Specify font family
  fontWeight: 'bold', // Set font weight to bold
  transition: 'color 0.3s ease', // Add transition effect for color change
}

const logoutButtonStyle = {
  color: '#fff', // Set text color to white
  background: 'none', // Transparent background
  border: 'none', // Remove border
  fontSize: '18px', // Set font size
  fontFamily: 'Poppins, sans-serif', // Specify font family
  fontWeight: 'bold', // Set font weight to bold
  cursor: 'pointer', // Show pointer cursor on hover
  transition: 'color 0.3s ease', // Add transition effect for color change
}

export default Navbar;
