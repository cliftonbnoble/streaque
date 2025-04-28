import React from "react";
// Use a specific image for Lio, or keep the placeholder
import lioMacbook from "../assets/nia-macbook.png"; // Placeholder, same as Nia for now
import './Lio.css'; // Import the Lio CSS file
import { FaSignInAlt, FaQuestionCircle, FaRegLightbulb } from 'react-icons/fa'; // Added icon imports

// Comments adapted for Lio

const Lio = () => { // Renamed component to Lio
  return (
    <section className="lio-section"> {/* Updated class prefix */}
      {/* Button is placed within the image container later */}

      {/* Content container (was lio-content-right, now adapting Nia structure) */}
      {/* This will be the main text area on the left */}
      <div className="lio-content-left"> {/* Using Nia's structure class */}
        <h1 className="lio-heading"> {/* Updated class prefix */}
          <span className="lio-heading-lio">Lio&nbsp;AI</span> {/* Updated text */}
          {/* Added stamp effect span */}
          <span className="lio-heading-action lio-heading-stamp">Institutions, Staff&nbsp;&amp;&nbsp;Instructors</span>
        </h1>

        {/* Added Overview Section */}
        <div className="lio-overview">
          {/* <h2>Overview</h2> */}
          <p>
            {/* Placeholder Overview text for Lio */}
            Empowering institutions with AI-driven insights and tools to enhance student success and operational efficiency.
          </p>
        </div>

        {/* Added How It Works Section */}
        <div className="lio-how-it-works">
          <h2>How It Works</h2>
          {/* Using same structure and icons as Nia */}
          <div className="how-it-works-list"> {/* Reusing Nia class for structure */}
            <div className="how-it-works-item">
              <span className="how-it-works-icon"><FaSignInAlt /></span>
              {/* Placeholder text */}
              <span className="how-it-works-text">Institutions integrate Lio dashboard.</span>
            </div>
            <div className="how-it-works-item">
              <span className="how-it-works-icon"><FaQuestionCircle /></span>
              {/* Placeholder text */}
              <span className="how-it-works-text">Access analytics, communication tools, and student support features.</span>
            </div>
            <div className="how-it-works-item">
              <span className="how-it-works-icon"><FaRegLightbulb /></span>
              {/* Placeholder text */}
              <span className="how-it-works-text">Utilize insights for proactive interventions and resource allocation.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Container (Right side now, adapting Nia structure) */}
      <div className="lio-image-container lio-image-bottom"> {/* Using Nia's structure classes */}
         {/* Removed button from here */}
        <img
          src={lioMacbook} // Use appropriate image variable
          alt="Lio AI for Institutions" // Updated alt text
          className="lio-laptop-image" /> {/* Updated class prefix */}
      </div>

      {/* ===== Decorative blurred shape ===== */}
      <div className="lio-blur-container"> {/* Updated class prefix */}
        <div className="lio-blur-bg1" /> {/* Updated class prefix */}
        <div className="lio-blur-bg2" /> {/* Updated class prefix */}
      </div>
    </section>
  );
};

export default Lio; 