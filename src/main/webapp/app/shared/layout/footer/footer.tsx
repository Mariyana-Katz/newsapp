import './footer.scss';

import React from 'react';

const App: React.FC = () => {
  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        <div className="row">
          <div className="col-md-6">
            <div className="ml-4">
              {' '}
              {/* Add left margin to indent */}
              <h3>About Us</h3>
              <p>This is a brief description of your website or company.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ml-4">
              {' '}
              {/* Add left margin to indent */}
              <h3>Contact Us</h3>
              <p>Email: example@example.com</p>
              <p>Phone: +1234567890</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {' '}
            {/* Full width for copyright */}
            <div className="ml-4">
              {' '}
              {/* Add left margin to indent */}
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
