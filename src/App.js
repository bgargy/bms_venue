import React, { useState } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import LoginPage from './components/LoginButton';
import HomePage from './components/HomePage';
import HomeAdmin from './components/HomeAdmin';
import BookVenuePage from './components/BookVenuePage';
import ConfirmLetterPage from './components/ConfirmLetterPage';
import VenueRequestPage from './components/VenueRequestPage'; // Add this line
import Navbar from './components/Navbar';
import AdminNavbar from './components/NavbarAdmin';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  // Define an array of routes where you want to show the Navbar
  const showNavbarRoutes = ['/home', '/admin', '/book-venue', '/confirm-letter', '/venue-request']; // Add '/venue-request'
  const isAdminRoute = location.pathname.startsWith('/admin');
  // Check if the current location is one of the showNavbarRoutes
  const shouldShowNavbar = showNavbarRoutes.includes(location.pathname);

  const handleLogin = (userInfo) => {
    // Set the logged-in user information in the state or perform other actions as needed
    setLoggedInUser(userInfo);

    // Redirect based on user type
    if (userInfo.userType === 'club') {
      navigate("/home");
    } else if (userInfo.userType === 'admin') {
      navigate("/admin"); // Redirect to the admin dashboard or appropriate page
    }
  };

  return (
    <div>
      {/* {shouldShowNavbar && <Navbar />} */}
      {isAdminRoute ? <AdminNavbar /> : shouldShowNavbar && <Navbar  />}
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/book-venue" element={<BookVenuePage />} />
        <Route path="/confirm-letter" element={<ConfirmLetterPage />} />
        <Route path="/venue-request" element={<VenueRequestPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
