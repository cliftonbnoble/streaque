import React from "react";
import niaMacbook from "../assets/nia-macbook.png"; // Changed image import
import './Nia.css'; // Import the CSS file
import { FaSignInAlt, FaQuestionCircle, FaRegLightbulb } from 'react-icons/fa'; // Added icon imports

/**
 * Full‑viewport hero section for a single‑page app.
 * - Background: subtle radial gradient matching the reference screenshot
 * - Left column: headline + sub‑headline + CTA button
 * - Right column: phone mock‑up displaying the supplied screenshot
 *
 * Tailwind CSS classes are used throughout.
 * Ensure Tailwind is configured in your project.
 * Place the screenshot in `src/assets/nia-macbook.png`. // Updated image name
 * Place the phone frame SVG in `public/phone-frame.svg`.
 */

const Nia = () => {
  return (
    <section className="nia-section">
            {/* ===== Left content ===== */}
      <div className="nia-content-left">
        <h1 className="nia-heading">
          <span className="nia-heading-nia">Nia&nbsp;AI</span>
          {/* Combined back into H1 and added a class for stamp effect */}
          <span className="nia-heading-action nia-heading-stamp">For&nbsp;Students</span>
        </h1>

        {/* Added Overview Section */}
        <div className="nia-overview">
          {/* <h2>Overview</h2> */}
          <p>
            An AI-powered, always-on coach that supports students across their
            student journey with academic, career, wellness, and financial needs.
          </p>
        </div>

        {/* Added How It Works Section */}
        <div className="nia-how-it-works">
          <h2>How It Works</h2>
          {/* Changed ol to div and li to div with icon placeholders */}
          <div className="how-it-works-list">
            <div className="how-it-works-item">
              {/* Replaced placeholder with icon component */}
              <span className="how-it-works-icon"><FaSignInAlt /></span>
              <span className="how-it-works-text">Students log into Nia Student portal</span>
            </div>
            <div className="how-it-works-item">
              {/* Replaced placeholder with icon component */}
              <span className="how-it-works-icon"><FaQuestionCircle /></span>
              <span className="how-it-works-text">Select a "Coach" (Academic, Career, Wellness, Financial, Community) or types their question</span>
            </div>
            <div className="how-it-works-item">
              {/* Replaced placeholder with icon component */}
              <span className="how-it-works-icon"><FaRegLightbulb /></span>
              <span className="how-it-works-text">Get real-time, tailored guidance, nudges, reminders and recommendations with the appropriate next steps.</span>
            </div>
          </div>
        </div>

        {/* Removed button from here */}
      </div>

      {/* ===== Image Container (Moved conceptually towards bottom, needs CSS) ===== */}
      <div className="nia-image-container nia-image-bottom"> {/* Added class for styling */}
        <img
          src={niaMacbook} // Updated image source
          alt="Nia AI for Students on Macbook" // Updated alt text
          className="nia-laptop-image" />
      </div>

      {/* ===== Decorative blurred shape ===== */}
      <div className="nia-blur-container">
        <div className="nia-blur-bg1" />
        <div className="nia-blur-bg2" />
      </div>
    </section>
  );
};

export default Nia; 