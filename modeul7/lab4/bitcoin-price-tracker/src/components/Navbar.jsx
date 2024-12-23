import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/bitcoin-rates">Bitcoin Rates</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
