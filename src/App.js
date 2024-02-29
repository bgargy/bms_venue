import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginButton';
import HomePage from './components/HomePage';
import BookVenuePage from './components/BookVenuePage';
import ConfirmLetterPage from './components/ConfirmLetterPage';
import VenueRequestPage from './components/VenueRequestPage'; // Add this line
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  // Define an array of routes where you want to show the Navbar
  const showNavbarRoutes = ['/home', '/book-venue', '/confirm-letter', '/venue-request']; // Add '/venue-request'

  // Check if the current location is one of the showNavbarRoutes
  const shouldShowNavbar = showNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/book-venue" element={<BookVenuePage />} />
        <Route path="/confirm-letter" element={<ConfirmLetterPage />} />
        <Route path="/venue-request" element={<VenueRequestPage />} /> {/* Add this line */}
      </Routes>
    </div>
  );
}

export default App;
