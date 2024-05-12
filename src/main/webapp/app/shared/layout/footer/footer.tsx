import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const App: React.FC = () => {
  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        <div className="row">
          <div className="col-md-12">
            <div className="ml-4">
              <p className="link-text">
                {/* Links to navbar items */}
                <Link to="/" className="link-text">
                  Top Stories
                </Link>
                <span className="footer-space"></span>
                <Link to="/World" className="link-text">
                  World
                </Link>
                <span className="footer-space"></span>
                <Link to="/National" className="link-text">
                  National
                </Link>
                <span className="footer-space"></span>
                <Link to="/Technology" className="link-text">
                  Technology
                </Link>
                <span className="footer-space"></span>
                <Link to="/Science" className="link-text">
                  Science
                </Link>
                <span className="footer-space"></span>
                <Link to="/Culture" className="link-text">
                  Culture
                </Link>
                <span className="footer-space"></span>
                <Link to="/Politics" className="link-text">
                  Politics
                </Link>
                <span className="footer-space"></span>
                <Link to="/Podcast" className="link-text">
                  Podcast
                </Link>
                {/* Add more links for other navbar items */}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="ml-4">
              <h3>About Us</h3>
              <p>This is a brief description of the website.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ml-4">
              <h3>Contact Us</h3>
              <p>Email: example@example.com</p>
              <p>Phone: +1234567890</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="ml-4">
              <p>
                © 2024 Copyright
                <span className="footer-space"></span>
                Privacy policy
                <span className="footer-space"></span>
                Terms of Service
                <span className="footer-space"></span>
                Help
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;
