import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// Removed import for CustomWavesEffect
import streaqueLogo from '../assets/streaque-logo.png'; // Header logo
import niaHeroLogo from '../assets/nia-hero-logo.png'; // Import the Nia hero logo

export default function NiaHero() {
  // Refs remain the same
  const vantaRef = useRef(null);
  const vantaInstance = useRef(null);

  useEffect(() => {
    // Revert to checking window.VANTA and initialize using it
    if (vantaRef.current && window.VANTA && !vantaInstance.current) {
      try {
        // console.log("Vanta Target Element:", vantaRef.current); // Optional: Keep for debugging
        vantaInstance.current = window.VANTA.CELLS({
          el: vantaRef.current,       
          THREE: THREE, // Pass the imported THREE
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          // Add CELLS specific options (using updated colors)
          color1: 0x8c8c,   // New light gray color
          color2: 0xf2e735, // New light yellow color
          size: 3.00,      // Example size
          // Removed WAVES specific options: color, backgroundColor, shininess, waveHeight, waveSpeed, zoom
        });

        // Removed post-initialization color setting block

      } catch (error) {
        console.error('Error initializing Vanta:', error);
      }
    }

    // Cleanup method remains the same
    return () => {
      // Check if destroy exists before calling
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
    background: '#000', // Ensure section background is black
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

  const navButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '9999px', // rounded-full
    border: '1px solid rgba(255, 255, 255, 0.3)', // Slightly visible white border
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Very subtle background
    padding: '0.5rem 1.5rem', // Adjust padding
    fontSize: '0.9rem', // text-sm approx
    fontWeight: 500, // font-medium
    color: 'white',
    marginLeft: '1rem', // Space between buttons
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, border-color 0.2s ease',
    // Add hover effect if desired (e.g., slightly brighter background/border)
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
    marginBottom: '1.5rem', // mb-6 - Adjusted spacing
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
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent black background
    fontSize: '1.8rem', // Increased font size (was 1.5rem)
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
  };

  const pStyle = {
    maxWidth: '640px', // max-w-xl
    fontSize: '1.125rem', // text-lg
    lineHeight: '1.75', // leading-relaxed approx
    color: '#d1d5db', // text-neutral-300 approx
    marginBottom: '2.5rem', // mb-10
  };

  // Renamed style object for the button
  const meetNiaStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    borderRadius: '9999px', // rounded-full
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Subtle dark background
    padding: '0.75rem 2rem', // px-8 py-3
    fontSize: '1rem', // text-base
    fontWeight: 500, // font-medium
    color: '#fff', // Changed text color to white
    border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, border-color 0.2s ease',
  };

  const svgStyle = {
      width: '16px',
      height: '16px',
      flexShrink: 0,
      stroke: '#fff', // Changed stroke to white to match button text
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
          <button style={navButtonStyle}>Join Waitlist</button>
          {/* <button style={navButtonStyle}>Log In</button> */}
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
        AI-driven support that students trust 
          <br />
          — and staff rely on.
        </p>

        <button style={meetNiaStyle}>
          Meet Nia
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2" // Use strokeWidth attribute
            // stroke="currentColor" // Remove, applied via style
            style={svgStyle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" // Standard right arrow path
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
