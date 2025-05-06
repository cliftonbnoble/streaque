import React, { useState, useRef, useEffect } from 'react';
import './EmailCapturePopup.css';

function EmailCapturePopup({ isVisible, onClose, logo }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    isOrganization: false,
    organizationName: '',
    isInvestor: false,
    isOther: false
  });
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  
  // Simple captcha states
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaQuestion, setCaptchaQuestion] = useState({});
  
  // Google Apps Script URL from environment variable
  const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_SCRIPT;
  
  // Log a warning if the environment variable is not set
  useEffect(() => {
    if (!SCRIPT_URL) {
      console.error('VITE_GOOGLE_SHEETS_SCRIPT environment variable is not set. Form submissions will not work.');
    }
  }, []);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

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
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        isOrganization: false,
        organizationName: '',
        isInvestor: false,
        isOther: false
      });
    }
  }, [isVisible]);

  // Email validation regex
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validate required fields
    if (!formData.firstName.trim()) {
      setSubmitStatus('First name is required.');
      return;
    }
    
    if (!formData.lastName.trim()) {
      setSubmitStatus('Last name is required.');
      return;
    }
    
    // Validate email
    if (!validateEmail(formData.email)) {
      setSubmitStatus('Please enter a valid email address.');
      return;
    }
    
    // Validate organization name if organization is checked
    if (formData.isOrganization && !formData.organizationName.trim()) {
      setSubmitStatus('Organization/School name is required.');
      return;
    }
    
    // Check captcha
    if (parseInt(captchaAnswer, 10) !== captchaQuestion.answer) {
      setSubmitStatus('Incorrect captcha answer. Please try again.');
      generateCaptcha();
      return;
    }

    // Check if script URL is available
    if (!SCRIPT_URL) {
      setSubmitStatus('Form submission is currently unavailable. Please try again later.');
      console.error('Missing SCRIPT_URL environment variable');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('Submitting...');
    
    try {
      // Using URLSearchParams to create form data
      const params = new URLSearchParams();
      params.append('firstName', formData.firstName);
      params.append('lastName', formData.lastName);
      params.append('email', formData.email);
      params.append('isOrganization', formData.isOrganization ? 'Yes' : 'No');
      
      if (formData.isOrganization) {
        params.append('organizationName', formData.organizationName);
      } else {
        params.append('organizationName', '');
      }
      
      params.append('isInvestor', formData.isInvestor ? 'Yes' : 'No');
      params.append('isOther', formData.isOther ? 'Yes' : 'No');
      
      // Using no-cors mode to bypass CORS issues
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // This prevents CORS errors but makes response unreadable
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params
      });
      
      // Since response is opaque with no-cors, we assume success if no error is thrown
      console.log('Form submitted');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        isOrganization: false,
        organizationName: '',
        isInvestor: false,
        isOther: false
      });
      setCaptchaAnswer('');
      setSubmitStatus('Success! Thank you for joining our waitlist.');
      setIsSubmitting(false);
      
      setTimeout(() => {
        onClose();
        setSubmitStatus('');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
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
          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
          />
          <div className="checkbox-container">
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="organization"
                name="isOrganization"
                checked={formData.isOrganization}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
              <label htmlFor="organization">Organization/School</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="investor"
                name="isInvestor"
                checked={formData.isInvestor}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
              <label htmlFor="investor">Investor</label>
            </div>
            <div className="checkbox-item">
              <input
                type="checkbox"
                id="other"
                name="isOther"
                checked={formData.isOther}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          
          {formData.isOrganization && (
            <input
              type="text"
              name="organizationName"
              placeholder="Organization/School Name"
              value={formData.organizationName}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className="organization-field"
            />
          )}
          
          <div className="captcha-container">
            <label className="captcha-question">
              {captchaQuestion.num1} + {captchaQuestion.num2} = ?
            </label>
            <input
              type="text"
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