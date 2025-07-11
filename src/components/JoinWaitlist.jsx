import { useState } from 'react';
import './JoinWaitlist.css';
import EmailCapturePopup from './EmailCapturePopup';
import streaqueLogo from '../assets/streaque-logo.png';

// Access variables from .env file (prefixed with VITE_)
// Ensure your .env file has VITE_APPS_SCRIPT_URL and VITE_APPS_SCRIPT_SECRET
const SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;
const SECRET_TOKEN = import.meta.env.VITE_APPS_SCRIPT_SECRET;

// WARNING: Even with .env, VITE_ variables are embedded in the build
// and accessible in the browser. This is NOT secure for secrets.

export function JoinWaitlist({ withInput = false }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

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
      console.log("Attempting to fetch:", SCRIPT_URL);
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'cors', // Required for cross-origin requests to Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email,
          token: SECRET_TOKEN, // Use the variable from .env
          type: 'hero_form' // Example type
        }),
      });

      // Note: Apps Script doPost often returns 200 OK even for logic errors handled in the script.
      // We need to parse the JSON response body to check for {ok: true}.
      const result = await response.json();

      if (response.ok && result.ok) {
        setStatus('success');
        setMessage('Success! You have been added to the waitlist.');
        setEmail(''); // Clear input on success
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

  if (withInput) {
    return (
      <form onSubmit={handleSubmit} className="join-waitlist-form">
        <input
          type="email"
          placeholder="name@companyemail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="join-waitlist-input"
          disabled={status === 'loading'}
        />
        <button 
          type="submit" 
          className="join-waitlist-button"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
        </button>
        {/* Display status messages */}
        {status === 'success' && <p className="waitlist-message success">{message}</p>}
        {status === 'error' && <p className="waitlist-message error">{message}</p>}
      </form>
    );
  }

  // Logic for the header button - now opens the popup
  const handleHeaderClick = () => {
    setShowPopup(true);
  };

  return (
    <>
      <button className="join-waitlist-header-button" onClick={handleHeaderClick}>
        Secure Early Access
      </button>
      <EmailCapturePopup 
        isVisible={showPopup} 
        onClose={() => setShowPopup(false)} 
        logo={streaqueLogo}
      />
    </>
  );
}

export default JoinWaitlist 