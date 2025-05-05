import React from 'react';
import './ProductivitySection.css';
import niaHeroLogo from '../assets/nia-hero-logo.png'; // Import the new logo
import financeAgentAvatar from '../assets/finance-agents-web.png'; // Import Finance Agent avatar
import healthAgentAvatar from '../assets/health-agents-web.png'; // Import Health Agent avatar
import studentAgentAvatar from '../assets/student-agents-web.png'; // Student Agent avatar
import adminAgentAvatar from '../assets/admin-agents-web.png'; // Admin Agent avatar
import careerAgentAvatar from '../assets/career-agents-web.png'; // Career Agent avatar
import supportAgentAvatar from '../assets/support-agents-web.png'; // Support Agent avatar
// Import faculty agents
import admissionAgentAvatar from '../assets/adminssion-agent-web.png'; // Admission Agent avatar (note the typo in file name)
import hrAgentAvatar from '../assets/hr-agent-web.png'; // HR Agent avatar
import analyticsAgentAvatar from '../assets/analytics-agent-web.png'; // Analytics Agent avatar
import facultyAgentAvatar from '../assets/faculty-agent-web.png'; // Faculty Agent avatar
import itAgentAvatar from '../assets/it-agent-web.png'; // IT Agent avatar
import schedulingAgentAvatar from '../assets/scheduling-agent-web.png'; // Scheduling Agent avatar
// Import the new images
// import niaStudentBackground from '../assets/nia-student-background.jpg';
// import niaFaculty from '../assets/nia-faculty.jpg';

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
        <h2 className="productivity-heading">
          <span className="heading-segment">Two tools.</span>{' '}
          <span className="heading-segment">One AI.</span>{' '}
          <span className="heading-segment">Infinite Impact.</span>
        </h2>
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

      {/* New Image Split Section */}
      <div className="image-split-section" style={{ marginBottom: '30px' }}>
        {/* Blue glow effect */}
        <div className="blue-glow"></div>
        
        <div className="conversation-container">
          <div className="conversation-box">
            <div className="conversation-header">
              <div className="conversation-controls">
                <span className="control-dot"></span>
                <span className="control-dot"></span>
                <span className="control-dot"></span>
              </div>
              <div className="conversation-title">Nia</div>
            </div>
            
            <div className="conversation-items">
              {/* Candidate message - right aligned - Updated avatar position */}
              <div className="conversation-item candidate-message">
                <div className="message-content">
                  <div className="message-header">
                    <div className="avatar-container">
                      <img src={financeAgentAvatar} alt="Finance Agent" className="avatar-img" />
                    </div>
                    <div className="message-label">Finance Agent</div>
                  </div>
                  <div className="message-text">
                  Your tuition balance is due in 5 days. Want help setting up a payment plan?
                  </div>
                </div>
              </div>

              {/* Noon message - left aligned - Already has avatar on left */}
              <div className="conversation-item noon-message">
                <div className="message-content">
                  <div className="message-header">
                    <div className="avatar-container">
                      <img src={healthAgentAvatar} alt="Health Agent" className="avatar-img" />
                    </div>
                    <div className="message-label">Health Agent</div>
                  </div>
                  <div className="message-text">
                  It's been a stressful week with 3 exams—would you like to schedule a wellness break or mindfulness session?
                  </div>
                </div>
              </div>

              {/* Third message - Student Agent - Updated avatar position */}
              <div className="conversation-item candidate-message">
                <div className="message-content">
                  <div className="message-header">
                    <div className="avatar-container">
                      <img src={studentAgentAvatar} alt="Student Agent" className="avatar-img" />
                    </div>
                    <div className="message-label">Student Agent</div>
                  </div>
                  <div className="message-text">
                  You have 2 assignments due tomorrow and a quiz in 3 days. Want a focused study plan?
                  </div>
                </div>
              </div>

              {/* Fourth message - Career Agent (updated from Admin) */}
              <div className="conversation-item noon-message">
                <div className="message-content">
                  <div className="message-header">
                    <div className="avatar-container">
                      <img src={careerAgentAvatar} alt="Career Agent" className="avatar-img" />
                    </div>
                    <div className="message-label">Career Agent</div>
                  </div>
                  <div className="message-text">
                    A company hiring psychology interns is visiting campus Tuesday. Want to RSVP or prep your resume?
                  </div>
                </div>
              </div>

              {/* Fifth message - Admin Agent (updated from Finance Agent) */}
              <div className="conversation-item candidate-message">
                <div className="message-content">
                  <div className="message-header">
                    <div className="avatar-container">
                      <img src={adminAgentAvatar} alt="Admin Agent" className="avatar-img" />
                    </div>
                    <div className="message-label">Admin Agent</div>
                  </div>
                  <div className="message-text">
                    The add/drop period ends Friday. Do you want to drop that course you haven't attended?
                  </div>
                </div>
              </div>

              {/* Sixth message - Support Agent with processing animation */}
              <div className="conversation-item noon-message processing">
                <div className="message-content">
                  <div className="message-header">
                    <div className="avatar-container">
                      <img src={supportAgentAvatar} alt="Support Agent" className="avatar-img" />
                    </div>
                    <div className="message-label">Support Agent</div>
                  </div>
                  <div className="message-text">
                    <span className="processing-text">Need help finding your Zoom link or class recording from yesterday?</span>
                    <span className="processing-dot">•</span>
                    <span className="processing-dot">•</span>
                    <span className="processing-dot">•</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="info-container">
          <div className="info-content">
            <h2 className="info-title">Nia</h2>
            <h3 className="info-subtitle">for Students</h3>
            
            <ul className="info-list">
              <li><strong>Context-Aware Support at Every Step:</strong> Provides real-time guidance that adapts to each student's journey.</li>
              <li><strong>Data-Driven Personalization:</strong> Harnesses program metrics and student inputs for tailored advice.</li>
              <li><strong>Proactive Nudges Before Challenges:</strong> Detects risks early and delivers timely outreach.</li>
              <li><strong>Continuous Learning Engine:</strong> Refines its insights from every interaction to enhance support.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Faculty & Staff Section - Info on left, conversation on right */}
      <div className="image-split-section faculty-staff-section" style={{ marginTop: '30px' }}>
        {/* Purple glow effect on left only */}
        <div className="purple-glow"></div>
        
        {/* Info container - now first in DOM order (left) */}
        <div className="info-container faculty-info">
          <div className="info-content">
            <h2 className="info-title">Nia</h2>
            <h3 className="info-subtitle faculty-staff">for Faculty & Staff</h3>
            
            <ul className="info-list">
              <li><strong>Automated Outreach Workflows:</strong> Automates repetitive, cross-system tasks with customizable AI pipelines.</li>
              <li><strong>Smart Intervention Alerts:</strong> Detects macro trends and flags individual at-risk students for timely action.</li>
              <li><strong>Unified Student Profiles:</strong> Consolidates progress, engagement, wellness, and program data into a 360° view.</li>
              <li><strong>Proactive Strategy Recommendations:</strong> Generates group- and student-level intervention plans before issues escalate.</li>
            </ul>
          </div>
        </div>

        {/* Conversation container - now second in DOM order (right) */}
        <div className="conversation-container faculty-conversation">
          <div className="conversation-box">
            <div className="conversation-header">
              <div className="conversation-controls">
                <span className="control-dot"></span>
                <span className="control-dot"></span>
                <span className="control-dot"></span>
              </div>
              <div className="conversation-title">Nia</div>
            </div>
            
            <div className="conversation-items">
              {/* First message - Admissions Agent */}
              <div className="conversation-item candidate-message">
                <div className="message-content">
                  <div className="message-header">
                    <div className="avatar-container">
                      <img src={admissionAgentAvatar} alt="Admissions Agent" className="avatar-img" />
                    </div>
                    <div className="message-label">Admissions Agent</div>
                  </div>
                  <div className="message-text">
                    You have 14 applicants still missing transcripts—should I send them a follow-up reminder?
                  </div>
                </div>
              </div>

              {/* Second message - HR Agent */}
              <div className="conversation-item noon-message">
                <div className="message-content">
                  <div className="message-header">
                    <div className="avatar-container">
                      <img src={hrAgentAvatar} alt="HR Agent" className="avatar-img" />
                    </div>
                    <div className="message-label">HR Agent</div>
                  </div>
                  <div className="message-text">
                    Three new hires haven't completed their onboarding forms. Would you like me to resend the link?
                  </div>
                </div>
              </div>

              {/* Third message - Analytics Agent */}
              <div className="conversation-item candidate-message">
                <div className="message-content">
                  <div className="message-header">
                    <div className="avatar-container">
                      <img src={analyticsAgentAvatar} alt="Analytics Agent" className="avatar-img" />
                    </div>
                    <div className="message-label">Analytics Agent</div>
                  </div>
                  <div className="message-text">
                    Student engagement dropped last week—should I generate a report comparing LMS logins and grades?
                  </div>
                </div>
              </div>

              {/* Fourth message - Faculty Agent */}
              <div className="conversation-item noon-message">
                <div className="message-content">
                  <div className="message-header">
                    <div className="avatar-container">
                      <img src={facultyAgentAvatar} alt="Faculty Agent" className="avatar-img" />
                    </div>
                    <div className="message-label">Faculty Agent</div>
                  </div>
                  <div className="message-text">
                    Five students haven't submitted the assignment due yesterday. Want to send a gentle nudge?
                  </div>
                </div>
              </div>

              {/* Fifth message - IT Agent */}
              <div className="conversation-item candidate-message">
                <div className="message-content">
                  <div className="message-header">
                    <div className="avatar-container">
                      <img src={itAgentAvatar} alt="IT Agent" className="avatar-img" />
                    </div>
                    <div className="message-label">IT Agent</div>
                  </div>
                  <div className="message-text">
                    Three students reported issues accessing your Zoom link. Want to reset it and resend?
                  </div>
                </div>
              </div>

              {/* Sixth message - Scheduling Agent with processing animation */}
              <div className="conversation-item noon-message processing">
                <div className="message-content">
                  <div className="message-header">
                    <div className="avatar-container">
                      <img src={schedulingAgentAvatar} alt="Scheduling Agent" className="avatar-img" />
                    </div>
                    <div className="message-label">Scheduling Agent</div>
                  </div>
                  <div className="message-text">
                    <span className="processing-text">Your next department meeting overlaps with a student advising slot. Want to reschedule one?</span>
                    <span className="processing-dot">•</span>
                    <span className="processing-dot">•</span>
                    <span className="processing-dot">•</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
} 