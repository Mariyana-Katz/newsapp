import React, { useState } from 'react';
import './navbar.scss';
import PublicIcon from '@mui/icons-material/Public';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ScienceSharpIcon from '@mui/icons-material/ScienceSharp';
import Diversity2SharpIcon from '@mui/icons-material/Diversity2Sharp';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false); // Function to close the dropdown
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeDropdown}>
          TOP STORIES
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleDropdown} // Added onClick event
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${dropdownOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/World" onClick={closeDropdown}>
                <PublicIcon /> WORLD
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/National" onClick={closeDropdown}>
                <NewspaperRoundedIcon /> NATIONAL
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Business" onClick={closeDropdown}>
                <BusinessRoundedIcon /> BUSINESS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Technology" onClick={closeDropdown}>
                <SettingsSuggestRoundedIcon /> TECHNOLOGY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Science" onClick={closeDropdown}>
                <ScienceSharpIcon /> SCIENCE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/culture" onClick={closeDropdown}>
                <Diversity2SharpIcon /> CULTURE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Politics" onClick={closeDropdown}>
                <PeopleRoundedIcon /> POLITICS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Weather" onClick={closeDropdown}>
                <CloudRoundedIcon /> WEATHER
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Search" onClick={closeDropdown}>
                <SearchRoundedIcon /> SEARCH
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
