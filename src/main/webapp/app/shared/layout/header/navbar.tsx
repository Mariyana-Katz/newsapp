import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Top Stories
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
            <li className="nav-item">
              <Link className="nav-link" to="/Technology">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Arts & Culture">
                Arts & Culture
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Politics">
                Politics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Climate">
                Climate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Food">
                Food
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
