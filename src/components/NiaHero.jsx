import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// Removed import for CustomWavesEffect
import streaqueLogo from '../assets/streaque-logo.png'; // Header logo
import niaHeroLogo from '../assets/nia-hero-logo.png'; // Import the Nia hero logo
import './FootWaitlist.css'; // Import the CSS for the button style

export default function NiaHero({ onJoinWaitlistClick }) {
  // Refs remain the same
  const vantaRef = useRef(null);
  const vantaInstance = useRef(null);

  useEffect(() => {
    // Initialize using window.VANTA.RINGS
    if (vantaRef.current && window.VANTA && !vantaInstance.current) {
      try {
        vantaInstance.current = window.VANTA.RINGS({
          el: vantaRef.current,
          THREE: THREE, // Pass the imported THREE
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          // Add RINGS specific options
          backgroundColor: 0x000000, // Set background to black
          color: 0x00ffff // Change rings color to cyan for better contrast
        });
        // console.log("Initialized window.VANTA.RINGS");
      } catch (error) {
        console.error('Error initializing Vanta:', error);
      }
    }

    // Cleanup method
    return () => {
      if (vantaInstance.current && typeof vantaInstance.current.destroy === 'function') {
          vantaInstance.current.destroy();
      }
      vantaInstance.current = null;
    };
  }, []);

  // --- Styles ---

  const sectionStyle = {
    position: 'relative',
    width: '100%',
    minHeight: '100vh', // Full viewport height
    overflow: 'hidden',
    color: 'white',
    background: '#000000', // Restore background color to black
    display: 'flex',     // Use flex to help center content vertically
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
  };

  const vantaBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0, // Behind content
  };

  const headerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 3rem', // Adjust padding as needed
    zIndex: 2, // Above Vanta, below potential modals
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  };

  // Add style for the image logo
  const logoImageStyle = {
    height: '48px', // Adjusted height (was 32px)
    width: 'auto',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1, // Above Vanta background
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '896px', // max-w-4xl approx
    padding: '4rem 1.5rem', // Increased top padding, px-6
    textAlign: 'center',
    // Removed height: '90vh' and margin: '0 auto' as flexbox on section handles centering
  };

  const h1Style = {
    fontWeight: 700, // font-bold
    marginBottom: '0.5rem', // mb-6 - Reduced spacing
    lineHeight: 1.2, // Adjust line height
    color: 'white', // Fallback
    display: 'flex', // Use flexbox for layout
    flexDirection: 'column', // Set back to column for stacking
    alignItems: 'center', // Keep horizontal centering
    // justifyContent: 'center', // Remove (not needed for column centering)
    gap: '0.2rem', // Small gap for closeness
  };

  // Style for "Introducing" stamp
  const introducingStyle = {
    display: 'inline-block',
    padding: '0.15rem 0.7rem', // Reduced padding for tighter fit
    lineHeight: 1, // Set line height to minimize extra space
    border: '2px solid #fff', // White border
    borderRadius: '0.5rem', // Rounded corners
    // backgroundColor: 'rgba(0, 0, 0, 0.2)', // Removed background color
    fontSize: '2.2rem', // Increased font size (was 1.8rem)
    fontWeight: 600, // Slightly bold
    color: '#fff',
    transform: 'rotate(-12deg)', // Keep rotation
    // marginBottom: '0.5rem', // Remove margin bottom, no longer needed
  };

  // Remove unused gradientSpanStyle

  // Style for the Nia hero logo image
  const niaLogoStyle = {
    height: '12rem', // Reduced height (was 24rem)
    width: 'auto',
    display: 'block',
    filter: 'drop-shadow(0 0 1px white) drop-shadow(0 0 1px white)', // Added thin white outline
  };

  const pStyle = {
    maxWidth: '640px', // max-w-xl
    fontSize: '1.25rem', // text-lg
    lineHeight: '1.75', // leading-relaxed approx
    color: '#ffffff', // Changed to bright white
    fontWeight: 700, // Added bold font weight
    marginBottom: '1.5rem', // Reduced bottom margin (was 2.5rem)
  };

  return (
    <section style={sectionStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <div style={logoContainerStyle}>
          {/* Replace circle and text with image */}
          <img src={streaqueLogo} alt="Streaque Logo" style={logoImageStyle} />
        </div>
        <div>
          <button className="fwl-button" onClick={onJoinWaitlistClick}>Join Waitlist</button>
        </div>
      </header>

      {/* Vanta Canvas Container - Attach renamed ref */}
      <div ref={vantaRef} style={vantaBackgroundStyle}></div>

      {/* Hero Content Container */}
      <div style={contentStyle}>
        <h1 style={h1Style}>
          <span style={introducingStyle}>Introducing</span>
          <img src={niaHeroLogo} alt="Nia Hero Logo" style={niaLogoStyle} />
        </h1>

        <p style={pStyle}>
        AI-driven support that students trust and staff rely on.
        </p>

        <button className="fwl-button meet-nia-button">
          Meet Nia
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            style={{ width: '16px', height: '16px', flexShrink: 0, marginLeft: '0.5rem' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
