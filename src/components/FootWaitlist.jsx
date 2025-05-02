import React from 'react';
import './FootWaitlist.css'; // Import the CSS file
import streaqueLogo from '../assets/streaque-logo.png'; // Restore logo import

const FootWaitlist = ({ onJoinWaitlistClick }) => {
  return (
    <footer className="fwl-section" id="footer">
      <div className="fwl-separator"></div>
      {/* Add logo back, positioned via CSS */}
      <img src={streaqueLogo} alt="Streaque Logo" className="fwl-logo" />
      <div className="fwl-content">
        {/* Centered Button */}
        <button
          type="button"
          className="fwl-button"
          onClick={onJoinWaitlistClick}
        >
          Secure Early Access
        </button>
      </div>
    </footer>
  );
};

export default FootWaitlist; 