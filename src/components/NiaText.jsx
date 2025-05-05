import React from 'react';
import PropTypes from 'prop-types';

const NiaText = ({ 
  text = 'Nia',
  fontSize = 'calc(6.625rem)',
  primaryColor = '#3eb6d1',
  secondaryColor = '#6842b9',
  className = '',
  style = {}
}) => {
  return (
    <div className={`nia-container ${className}`} style={{
      height: '200px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      padding: '0',
      margin: '0',
      ...style
    }}>
      {/* Blurred background layer */}
      <div className="nia-bg-layer" style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        filter: 'blur(40px)',
        transform: 'scaleY(1.5) scale(1.2)',
        zIndex: 0
      }}>
        <div className="nia-text" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(${hexToRgb(primaryColor)}, 0.00) 0.01%, rgba(${hexToRgb(primaryColor)}, 1) 0.01%, rgba(${hexToRgb(primaryColor)}, 0.00) 40%),
            linear-gradient(90deg, rgba(${hexToRgb(secondaryColor)}, 0.00) 60%, rgba(${hexToRgb(secondaryColor)}, 1) 99.99%, rgba(${hexToRgb(secondaryColor)}, 0.00) 100%),
            linear-gradient(90deg, rgba(${hexToRgb(primaryColor)}, 0.00) 60%, rgba(${hexToRgb(primaryColor)}, 0) 99.99%, rgba(${hexToRgb(primaryColor)}, 0.00) 100%)
          `,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          <span style={{ fontSize, lineHeight: 1, fontWeight: 700, fontFamily: "'Kaushan Script', cursive" }}>{text}</span>
        </div>
      </div>
      
      {/* White glow layer */}
      <div className="nia-glow-layer" style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        zIndex: 10
      }}>
        <div className="nia-text-glow">
          <span style={{ 
            fontSize, 
            lineHeight: 1, 
            fontWeight: 700, 
            fontFamily: "'Kaushan Script', cursive",
            WebkitTextStroke: '4px rgba(255, 255, 255, 0.45)',
            color: 'transparent',
            filter: 'blur(6px) brightness(1.4)'
          }}>{text}</span>
        </div>
      </div>
      
      {/* Extra text-stroke layer for added weight */}
      <div className="nia-stroke-layer" style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        zIndex: 15,
        filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4))'
      }}>
        <div className="nia-text-stroke">
          <span style={{ 
            fontSize, 
            lineHeight: 1, 
            fontWeight: 700, 
            fontFamily: "'Kaushan Script', cursive",
            WebkitTextStroke: `2px rgba(${hexToRgb(primaryColor)}, 0.9)`,
            color: 'transparent'
          }}>{text}</span>
        </div>
      </div>
      
      {/* Main gradient text layer */}
      <div className="nia-main-layer" style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        zIndex: 20
      }}>
        <div className="nia-text" style={{
          backgroundImage: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor}, ${primaryColor})`,
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          animation: 'gradientShift 6s ease-in-out infinite'
        }}>
          <span style={{ fontSize, lineHeight: 1, fontWeight: 700, fontFamily: "'Kaushan Script', cursive" }}>{text}</span>
        </div>
      </div>
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .nia-container {
            perspective: 1000px;
          }
          
          .nia-text-glow, .nia-text-stroke {
            display: inline-block;
          }
          
          @media (max-width: 768px) {
            .nia-text span {
              font-size: calc(${fontSize} * 0.7) !important;
            }
          }
          
          @media (max-width: 480px) {
            .nia-text span {
              font-size: calc(${fontSize} * 0.5) !important;
            }
          }
        `}
      </style>
    </div>
  );
};

// Helper function to convert hex colors to RGB values
function hexToRgb(hex) {
  // Remove the hash if it exists
  hex = hex.replace(/^#/, '');
  
  // Parse the hex values
  let r, g, b;
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }
  
  return `${r}, ${g}, ${b}`;
}

NiaText.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

export default NiaText; 