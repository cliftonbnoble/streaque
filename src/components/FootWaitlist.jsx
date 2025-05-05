import React from 'react';
import streaqueLogo from '../assets/streaque-logo.png';
import '../components/NiaHero.css'; // Import styles
import './FootWaitlist.css'; // Import component-specific styles

const FootWaitlist = ({ onJoinWaitlistClick }) => {
  return (
    <footer id="footer" className="fwl-section">
      <div className="fwl-separator"></div>
      
      <div className="fwl-container">
        <div className="fwl-column fwl-left">
          <img src={streaqueLogo} alt="Streaque Logo" className="fwl-logo" />
        </div>
        
        <div className="fwl-column fwl-center">
          <div className="hero-sentence fade-in">
            Streamline support and drive student success with AI
          </div>
          <button
            type="button"
            onClick={onJoinWaitlistClick}
            className="meet-nia-button"
          >
            Secure Early Access
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="button-arrow-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        
        <div className="fwl-column fwl-right">
          {/* Empty column for future content */}
        </div>
      </div>
    </footer>
  );
};

export default FootWaitlist; 