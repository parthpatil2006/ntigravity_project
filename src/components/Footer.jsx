import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="dashboard-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>About Us</h3>
            <ul>
              <li><a href="https://kbcnmu.ac.in/about" target="_blank" rel="noopener noreferrer">About Us</a></li>
              <li><a href="https://kbcnmu.ac.in/disclaimer" target="_blank" rel="noopener noreferrer">Disclaimer</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="https://kbcnmu.ac.in/results" target="_blank" rel="noopener noreferrer">Results</a></li>
              <li><a href="https://kbcnmu.ac.in/exam-form" target="_blank" rel="noopener noreferrer">Exam Form</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Student Resources</h3>
            <ul>
              <li><a href="https://kbcnmu.ac.in/notes" target="_blank" rel="noopener noreferrer">Study Notes</a></li>
              <li><a href="https://kbcnmu.ac.in/scholarships" target="_blank" rel="noopener noreferrer">Scholarships</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>Email: patilvtejas@gmail.com</p>
            <p>Address: Shidwadi Chalisgaon Maharashtra - 424106</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="https://kbcnmu.ac.in/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <span>|</span>
            <a href="https://kbcnmu.ac.in/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
          </div>
          <p>© 2026 CampusHub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
