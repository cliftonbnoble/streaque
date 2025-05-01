import React, { useState } from 'react';
import './EmailCapturePopup.css';

function EmailCapturePopup({ isVisible, onClose }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle email submission logic here (e.g., send to backend)
    console.log('Email submitted:', email);
    setEmail(''); // Clear the input
    onClose(); // Close the popup after submission
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Join our waitlist</h2>
        <p>Two tools. One AI. Infinite impact.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Join</button>
        </form>
        <p className="privacy-note">We respect your privacy.</p>
      </div>
    </div>
  );
}

export default EmailCapturePopup; 