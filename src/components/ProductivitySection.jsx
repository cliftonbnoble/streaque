import React from 'react';
import './ProductivitySection.css';
import niaHeroLogo from '../assets/nia-hero-logo.png'; // Import the new logo
// Import the new images
import niaStudentBackground from '../assets/nia-student-background.jpg';
import niaFaculty from '../assets/nia-faculty.jpg';

const issues = [
  'Limited communication',
  'Irregular hours',
  'Delayed responses',
  'Incomplete profiles',
  'Missed connections',
  'Slow response',
  'Poor matches (courses/advisors)',
  'Overwhelmed advisors',
  'Fragmented systems',
  'Student confusion',
  'Lack of feedback',
  'Financial aid complexity',
  'Course registration stress',
  'Finding study groups',
  'Mental health strain',
  'Navigating campus resources',
  'Unclear degree requirements',
  'Transfer credit issues',
  'Internship search difficulty',
  'Time management challenges',
  'Feeling isolated',
  'Accessibility barriers',
  'Housing application woes',
  'Understanding policies',
  'Career planning uncertainty',
  'Graduation anxiety',
  'Textbook costs',
  'Balancing work/study',
  'Tech support delays',
  'Lost in bureaucracy'
];

const solutions = [
  '24/7 Support',
  'Automated scheduling',
  'Seamless communication',
  'Faster responses',
  'Completed profiles',
  'Better matches',
  'Enhanced productivity',
  'Personalized guidance',
  'Integrated platform',
  'Clear pathways',
  'Proactive alerts',
  'AI study assistant',
  'Resource recommendations',
  'Automated reminders',
  'Simplified financial aid info',
  'Mental health resources hub',
  'Career pathway mapping',
  'Academic progress tracking',
  'Instant feedback loops',
  'Virtual community building'
];

// Added Graduation Cap Icon
const GraduationCapIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/>
  </svg>
);

// Added University Icon
const UniversityIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3L2 8l10 5 10-5-10-5z"/>
    <path d="M20 11v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7"/>
    <path d="M6 11v7"/>
    <path d="M18 11v7"/>
    <path d="M10 16h4"/>
  </svg>
);

// Added Integration (Link) Icon
const IntegrationIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
  </svg>
);

// Added Wavy Divider SVG
const WavyDivider = () => (
  <svg viewBox="0 0 100 20" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '30px' }}>
    {/* Smoother double curve */}
    <path d="M0 10 Q 15 20, 30 10 T 70 10 Q 85 0, 100 10" stroke="#0a2540" fill="#0a2540" /> 
  </svg>
);

// Fisher-Yates Shuffle function
function shuffleArray(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Added Student Icon
const StudentIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="7" r="4"></circle>
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
  </svg>
);

// --- New Icons for Diagram --- 
const SparkleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 L14.35 8.65 L20 11 L14.35 13.35 L12 19 L9.65 13.35 L4 11 L9.65 8.65 Z"/>
  </svg>
);

const ChatBubbleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

// Updated Handshake Icon
const HandshakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

export default function ProductivitySection() {
  // Duplicate lists 12 times for truly seamless marquee
  const baseDuplicatedIssues = [
    ...issues, ...issues, ...issues, ...issues,
    ...issues, ...issues, ...issues, ...issues,
    ...issues, ...issues, ...issues, ...issues
  ];
  const duplicatedSolutions = [
    ...solutions, ...solutions, ...solutions, ...solutions,
    ...solutions, ...solutions, ...solutions, ...solutions,
    ...solutions, ...solutions, ...solutions, ...solutions
  ];

  // Create and shuffle three unique lists for issue rows
  const duplicatedIssues1 = shuffleArray([...baseDuplicatedIssues]);
  const duplicatedIssues2 = shuffleArray([...baseDuplicatedIssues]);
  const duplicatedIssues3 = shuffleArray([...baseDuplicatedIssues]);

  return (
    <section className="productivity-section">
      {/* Centered Content Wrapper */}
      <div className="productivity-content">
        <h2 className="productivity-heading">Two tools. One AI. Infinite Impact.</h2>
      </div>

      <div className="marquee-wrapper">
        {/* Container for the scrolling elements */}
        <div className="marquees-container">
          {/* Wrapper for Issue Rows (Left Half) */}
          <div className="issue-rows-wrapper">
            {/* Issue Rows */}
            <div className="marquee issue-row issue-row-1" aria-hidden="true">
              {duplicatedIssues1.map((text, idx) => (
                <span key={idx} className="tag issue">{text}</span>
              ))}
            </div>
            <div className="marquee issue-row issue-row-2" aria-hidden="true">
              {duplicatedIssues2.map((text, idx) => (
                <span key={idx} className="tag issue">{text}</span>
              ))}
            </div>
            <div className="marquee issue-row issue-row-3" aria-hidden="true">
              {duplicatedIssues3.map((text, idx) => (
                <span key={idx} className="tag issue">{text}</span>
              ))}
            </div>
          </div> {/* End issue-rows-wrapper */}

          {/* Wrapper for Solution Row (Right Half) */}
          <div className="solution-row-wrapper">
            {/* Solution Row (Scrolls within the right wrapper) */}
            <div className="marquee solution-row" aria-hidden="true">
              {duplicatedSolutions.map((text, idx) => (
                <span key={idx} className="tag solution">{text}</span>
              ))}
            </div>
          </div> {/* End solution-row-wrapper */}
        </div>

        {/* Star remains in the center */}
        <div className="star-container">
          <div className="star-circle">
            <img
              src={niaHeroLogo}
              alt="Nia Hero Logo"
              className="star-logo-img"
            />
          </div>
        </div>
      </div>

      {/* Centered Content Wrapper for the Diagram - COMMENTED OUT */}
      {/* 
      <div className="productivity-content diagram-outer-wrapper">
        <div className="diagram-container">
          <div className="diagram-box box-tl">
            <h4>Personalized Support. Proactive Insights. Powered by AI</h4>
            <div className="diagram-icon-text">
              <StudentIcon />
              <p>AI That Understands Students—And Empowers Staff</p>
            </div>
          </div>

          <div className="diagram-box box-tr">
            <h4>Unifying Student Success with Intelligent Support</h4>
            <div className="diagram-icon-text">
              <GraduationCapIcon />
              <p>The AI-Powered Ecosystem for Holistic Student Support</p>
            </div>
          </div>

          <div className="diagram-box box-bl">
             <h4>Your Partner in Student Success.</h4>
             <div className="diagram-icon-text">
               <ChatBubbleIcon />
               <p>Student Success, Simplified and Streamlined</p>
             </div>
          </div>

          <div className="diagram-box box-br">
            <h4>Smarter Engagement. Better Outcomes.</h4>
            <p>From Insight to Action—AI That Cares.</p>
             <div className="diagram-icon-text">
               <HandshakeIcon />
               <p>Real-Time Help for Students. Real Impact for Institutions.</p>
             </div>
          </div>

          <div className="diagram-center">
            <div className="center-box-ai">NiaCoach</div>
            <div className="center-box-generate">AI</div>
          </div>
        </div>
      </div> 
      */}

      {/* New Image Split Section */}
      <div className="image-split-section">
        <div className="image-container image-container-left">
          <img src={niaStudentBackground} alt="Student focused background" className="split-image" />
          {/* Text Overlay for Left Image */}
          <div className="text-overlay text-overlay-left">
            <h1>Nia For Students</h1>
            <p>Personalized Support. Proactive Insights. Powered by AI</p>
            <p>Student Success, Simplified and Streamlined</p>
            <p>Smarter Engagement. Better Outcomes. From Insight to Action.</p>
          </div>
        </div>
        <div className="image-container image-container-right">
          <img src={niaFaculty} alt="Faculty focused background" className="split-image" />
          {/* Text Overlay for Right Image */}
          <div className="text-overlay text-overlay-right">
            <h1>Nia For Faculty & Staff</h1>
            <p>The AI-Powered Ecosystem for Holistic Student Support</p>
            <p>Real-Time Help for Students. Real Impact for Institutions.</p>
            <p>AI That Understands Students—And Empowers Staff</p>
          </div>
        </div>
      </div>

    </section>
  );
} 