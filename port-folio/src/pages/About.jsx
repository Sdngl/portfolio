import React from 'react';
import './pages.css'; // Shared page styles
import './About.css'; // About-specific styles

const About = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">About Me</h1>
      <div className="about-content">
        {/* Your about content */}
      </div>
    </div>
  );
};

export default About;