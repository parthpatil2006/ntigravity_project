import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to the Student Portal</h1>
        <p className="hero-subtitle">Your One-Stop Solution for All College Services</p>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
