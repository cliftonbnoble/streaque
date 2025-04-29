import React from 'react';
import JoinWaitlist from './JoinWaitlist.jsx';
import './Hero.css';
import streaqueLogoS from '../assets/S-logo-150.png'; // Import the logo

// Define the taglines
const taglines = [
  "Student Success, Simplified and Scaled by AI.",
  "Personalized Support. Proactive Insights. Powered by AI.",
  "Reimagining Student Success with Intelligent Guidance."
];

export function Hero() {
  // Select a random tagline on each render
  const randomIndex = Math.floor(Math.random() * taglines.length);
  const randomTagline = taglines[randomIndex];

  return (
    <div className="hero-wrapper">
      <div className="white-header">
        <div className="header-content">
          {/* Group logo image and text */}
          <div className="hero-logo-container">
            <img src={streaqueLogoS} alt="Streaque S Logo" className="hero-logo-img" />
            <div className="hero-logo">streaque</div>
          </div>
          <JoinWaitlist />
        </div>
      </div>
      <header className="hero">
        <div className="hero-content">
          {/* <h2 className="hero-subtitle">Introducing</h2> */}
          <h1 className="hero-title">
            <span className="hero-highlight stamp">NiaCoach</span>
          </h1>
          <p className="hero-description">
            {randomTagline}
          </p>
          <JoinWaitlist withInput />
          <p className="hero-partner-text">
            Shape the Future of Student Success—Join Our Early Access Network as a Founding Partner or Investor
          </p>
        </div>
      </header>
    </div>
  );
}

export default Hero; 