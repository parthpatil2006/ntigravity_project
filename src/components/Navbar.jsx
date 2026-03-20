import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ credits }) => {
  return (
    <header className="dashboard-header">
      <div className="header-content">
        <NavLink to="/" className="logo-section">
          <div className="logo-icon">🎓</div>
          <span className="logo-text">CampusHub</span>
        </NavLink>
        <nav className="main-nav">
          <NavLink to="/" id="link-home">Home</NavLink>
          <a href="https://kbcnmu.ac.in/results" target="_blank" rel="noopener noreferrer" id="link-results">Results</a>
          <a href="https://kbcnmu.ac.in/exam-form" target="_blank" rel="noopener noreferrer" id="link-exam-form">Exam Form</a>
          <a href="https://kbcnmu.ac.in/scholarships" target="_blank" rel="noopener noreferrer" id="link-scholarships">Scholarships</a>
          <NavLink to="/upload" className="highlight-nav">📤 Upload Notes (+10 Pts)</NavLink>
          <NavLink to="/profile" className="profile-btn">
             👤 Profile ({credits} pts)
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
