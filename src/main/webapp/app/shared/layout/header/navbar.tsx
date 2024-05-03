// Navbar.tsx
import React from 'react';

import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NewsApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/World">
                World
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/National">
                National
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Business">
                Business
              </Link>
            </li>
            {/* Add other navbar items using Link */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
