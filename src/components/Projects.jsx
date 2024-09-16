
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2>Projects</h2>
        <div class="project-grid">
            <div class="project-card">
                <h3>ArenaHub</h3>
                <p>Sports Arena Booking website</p>
            </div>
            <div class="project-card">
                <h3>InkNarrator</h3>
                <p>Story writer bot</p>
            </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
