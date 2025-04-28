import React, { useState } from 'react';
import './FootWaitlist.css'; // Import the CSS file

// Access variables from .env file (prefixed with VITE_)
// Ensure your .env file has VITE_APPS_SCRIPT_URL and VITE_APPS_SCRIPT_SECRET
const SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;
const SECRET_TOKEN = import.meta.env.VITE_APPS_SCRIPT_SECRET;

// WARNING: Even with .env, VITE_ variables are embedded in the build
// and accessible in the browser. This is NOT secure for secrets.

const FootWaitlist = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    // Check if environment variables are loaded
    if (!SCRIPT_URL || !SECRET_TOKEN) {
      setStatus('error');
      setMessage('Configuration error. Please contact support.');
      console.error('Missing VITE_APPS_SCRIPT_URL or VITE_APPS_SCRIPT_SECRET in .env');
      return;
    }

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email,
          token: SECRET_TOKEN, // Use the variable from .env
          type: 'footer_form' // Example type for this form
        }),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        setStatus('success');
        setMessage('Success! You have been added to the waitlist.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(result.error || 'An error occurred. Please try again.');
        console.error('Apps Script Error:', result.error);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setStatus('error');
      setMessage('A network error occurred. Please try again.');
    }
  };

  return (
    <section className="fwl-section" id="waitlist">
      <div className="fwl-content">
        <h2 className="fwl-heading">Join our early access waitlist</h2>
        <form className="fwl-form" onSubmit={handleSubmit}>
          <div className="fwl-form-group">
            <input
              type="email"
              className="fwl-input"
              placeholder="name@companyemail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
            />
            <button 
              type="submit" 
              className="fwl-button"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>
          {/* Display status messages */}
          {status === 'success' && <p className="waitlist-message success">{message}</p>}
          {status === 'error' && <p className="waitlist-message error">{message}</p>}
        </form>
      </div>

      {/* ===== Decorative blurred shape ===== */}
      {/* Position these via CSS */}
      <div className="fwl-blur-container">
        <div className="fwl-blur-bg1" />
        <div className="fwl-blur-bg2" />
      </div>
    </section>
  );
};

export default FootWaitlist; 