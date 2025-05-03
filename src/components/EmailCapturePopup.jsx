import React, { useState, useRef, useEffect } from 'react';
import './EmailCapturePopup.css';

function EmailCapturePopup({ isVisible, onClose, logo }) {
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  
  // Simple captcha states
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaQuestion, setCaptchaQuestion] = useState({});
  
  // Google Apps Script URL
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyfbh40VFHv1DG3H5-1vFOA7_ZgSV4skPY_r2JwK_h6KQ_c_GVTyV1c13_Cwnp8o_-osA/exec';

  // Generate a new captcha question
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const answer = num1 + num2;
    setCaptchaQuestion({ num1, num2, answer });
    setCaptchaAnswer('');
  };

  // Generate captcha on component mount and whenever the popup becomes visible
  useEffect(() => {
    if (isVisible) {
      generateCaptcha();
    }
  }, [isVisible]);

  // Email validation regex
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validate email
    if (!validateEmail(email)) {
      setSubmitStatus('Please enter a valid email address.');
      return;
    }
    
    // Check captcha
    if (parseInt(captchaAnswer, 10) !== captchaQuestion.answer) {
      setSubmitStatus('Incorrect captcha answer. Please try again.');
      generateCaptcha();
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('Submitting...');
    
    try {
      // Using URLSearchParams to create form data
      const formData = new URLSearchParams();
      formData.append('email', email);
      
      // Using no-cors mode to bypass CORS issues
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // This prevents CORS errors but makes response unreadable
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData
      });
      
      // Since response is opaque with no-cors, we assume success if no error is thrown
      console.log('Form submitted');
      setEmail('');
      setCaptchaAnswer('');
      setSubmitStatus('Success! Thank you for joining our waitlist.');
      setIsSubmitting(false);
      
      setTimeout(() => {
        onClose();
        setSubmitStatus('');
      }, 2000);
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitStatus('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        {logo && <img src={logo} alt="Streaque Logo" className="popup-logo" />}
        <h2>Join our waitlist</h2>
        <p>Two tools. One AI. Infinite impact.</p>
        <form onSubmit={handleSubmit} ref={formRef}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
          />
          <div className="captcha-container">
            <label className="captcha-question">
              {captchaQuestion.num1} + {captchaQuestion.num2} = ?
            </label>
            <input
              type="number"
              className="captcha-input"
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              required
              disabled={isSubmitting}
              placeholder="Answer"
            />
          </div>
          <button type="submit" disabled={isSubmitting}>Join</button>
        </form>
        {submitStatus && <p className="submit-status">{submitStatus}</p>}
        <p className="privacy-note">We respect your privacy.</p>
      </div>
    </div>
  );
}

export default EmailCapturePopup; 