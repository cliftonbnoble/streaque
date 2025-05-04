import { useEffect, useState } from 'react';
// Comment out Three.js import as it's only needed for Vanta
// import * as THREE from 'three';
// Removed import for CustomWavesEffect
import streaqueLogo from '../assets/streaque-logo.png'; // Header logo
import niaHeroLogo from '../assets/nia-hero-logo.png'; // Import the Nia hero logo
import './NiaHero.css'; // Import the new CSS file

const sentences = [
  "The AI partner transforming student success and staff workflows.",
  "Smarter support. Stronger students. Empowered staff.",
  "Your AI-powered solution for student success and staff efficiency.",
  "One AI. Two Missions: Transform Student Success. Amplify Staff Impact.",
  "One AI. Two Missions: Unleash Student Potential. Empower Staff Excellence.",
  "AI-driven support that students trust and staff rely on.",
  "The AI co-pilot unifying student support and supercharging staff efficiency"
];

export default function NiaHero({ onJoinWaitlistClick }) {
  // Remove unused refs
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false); // State for animation

  useEffect(() => {
    // Comment out Vanta initialization
    /*
    // Debug logging to check Vanta availability
    console.log("Vanta available:", window.VANTA ? "Yes" : "No");
    console.log("Vanta FOG available:", window.VANTA && window.VANTA.FOG ? "Yes" : "No");
    
    // Initialize using window.VANTA.FOG instead of RINGS
    if (vantaRef.current && window.VANTA && !vantaInstance.current) {
      try {
        // Check if FOG effect is available
        if (!window.VANTA.FOG) {
          console.error("VANTA.FOG effect is not available. Available effects:", Object.keys(window.VANTA));
          return;
        }
        
        console.log("Initializing VANTA.FOG with params");
        vantaInstance.current = window.VANTA.FOG({
          el: vantaRef.current,
          THREE: THREE, // Pass the imported THREE
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xd4e64d,
          midtoneColor: 0x56a6e6,
          lowlightColor: 0xb299f2,
          baseColor: 0x000000,
          blurFactor: 0.66,
          speed: 1.50,
          zoom: 0.30
        });
        console.log("VANTA.FOG initialization successful");
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
    */
  }, []);

  // Effect for cycling sentences
  useEffect(() => {
    const intervalTime = 15000; // 15 seconds
    const fadeTime = 500; // 0.5 seconds for fade animation

    const intervalId = setInterval(() => {
      setIsFadingOut(true); // Start fading out

      // Wait for fade out animation to complete before changing text and fading in
      setTimeout(() => {
        setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        setIsFadingOut(false); // Start fading in
      }, fadeTime);

    }, intervalTime);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only once on mount

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
    justifyContent: 'center', // Changed from space-between to center for better vertical alignment
  };

  // Add style for the image logo
  const logoImageStyle = {
    height: '48px', // Adjusted height (was 32px)
    width: 'auto',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 3, // Increased z-index to be above the video and overlay
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '896px', // max-w-4xl approx
    padding: '4rem 1.5rem', // Increased top padding, px-6
    textAlign: 'center',
    marginTop: 'auto', // Changed from fixed 10vh to auto to enable flexbox vertical centering
    marginBottom: 'auto', // Added to help center vertically with flexbox
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

  const pStyle = {
    maxWidth: '100%', // Changed from 640px to allow full width
    fontSize: '1.25rem', // text-lg
    lineHeight: '1.75', // leading-relaxed approx
    color: '#ffffff', // Changed to bright white
    fontWeight: 700, // Added bold font weight
    marginBottom: '1.5rem', // Reduced bottom margin (was 2.5rem)
    overflow: 'visible', // Ensure text is fully visible
  };

  // Video container style
  const videoContainerStyle = {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '45%', // Reduced height slightly (was 50%)
    overflow: 'hidden',
    zIndex: 1,
    bottom: 0, // Position at bottom
    top: 'auto', // Override top position
  };

  // Style for the blue overlay
  const blueOverlayStyle = {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#0066cc', // Blue color
    opacity: 0.4, // Adjust opacity to control intensity
    mixBlendMode: 'overlay', // Blend mode for more natural color mixing
    zIndex: 2, // Above the video (1) but below content (3)
  };

  // Style for the video background
  const videoStyle = {
    position: 'absolute',
    width: '100%',
    height: '200%', // Double the height to compensate for container
    objectFit: 'cover', // Use cover to fill the container
    transform: 'scaleY(0.5)', // Scale it to 50% of its height
    transformOrigin: 'bottom', // Transform from bottom
    bottom: 0, // Align to bottom
    top: 'auto', // Override top position
    zIndex: 1, // Ensure video is at the bottom of the stack
    filter: 'hue-rotate(210deg) saturate(150%) brightness(80%)', // Add blue tint filter
  };

  return (
    <section style={sectionStyle}>
      {/* Video background */}
      <div style={videoContainerStyle}>
        <video 
          style={videoStyle} 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source 
            src="https://eubzkoywhckxuyrjsrje.supabase.co/storage/v1/object/public/website/line-waves.webm?t=2024-03-19T22%3A09%3A07.266Z" 
            type="video/webm" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Blue overlay */}
        <div style={blueOverlayStyle}></div>
      </div>
      
      {/* Header - updated to use CSS classes */}
      <header className="hero-header">
        <div className="hero-logo-container">
          <img src={streaqueLogo} alt="Streaque Logo" style={logoImageStyle} />
        </div>
        <div>
          <button className="fwl-button" onClick={onJoinWaitlistClick}>Secure Early Access</button>
        </div>
      </header>

      {/* Hero Content Container */}
      <div style={contentStyle} className="hero-content">
        <h1 style={h1Style}>
          <span className="introducing-stamp">Introducing</span>
          <img src={niaHeroLogo} alt="Nia Hero Logo" className="nia-logo" />
        </h1>

        {/* Apply animation class based on isFadingOut state */}
        <p style={pStyle} className={`hero-sentence ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
          {sentences[currentSentenceIndex]}
        </p>

        <button className="fwl-button meet-nia-button" onClick={onJoinWaitlistClick}>
          Meet Nia
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
    </section>
  );
}
