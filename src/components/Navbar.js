import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/book-venue">Book Venue</Link>
        </li>
        <li>
          <Link to="/confirm-letter">Confirm Letter</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
