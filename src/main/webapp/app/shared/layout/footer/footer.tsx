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
              <p>
                {/* Links to navbar items */}
                <Link to="/">Top Stories</Link>
                <span className="footer-space"></span>
                <Link to="/World">World</Link>
                <span className="footer-space"></span>
                <Link to="/National">National</Link>
                <span className="footer-space"></span>
                <Link to="/Technology">Technology</Link>
                <span className="footer-space"></span>
                <Link to="/Science">Science</Link>
                <span className="footer-space"></span>
                <Link to="/Science">Culture</Link>
                <span className="footer-space"></span>
                <Link to="/Science">Politics</Link>
                <span className="footer-space"></span>
                <Link to="/Science">Weather</Link>
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
