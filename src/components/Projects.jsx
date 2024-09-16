
import React from 'react';


const Projects = () => {
  return (
    <section id="projects" className="mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800">Projects</h2>
        <div className="flex:justify-center text-inline">
            <div class="text-center">
                <h3 className="text-gray-700 text-lg leading-relaxed">ArenaHub</h3>
                <p className="text-gray-600 text-g leading-relaxed">Sports Arena Booking website</p>
            </div>
            <div class="text-center">
                <h3 className="text-gray-700 text-lg leading-relaxed">InkNarrator</h3>
                <p className="text-gray-600 text-g leading-relaxed">Story writer bot</p>
            </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
