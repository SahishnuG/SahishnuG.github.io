import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Skills</h2>
      <ul>
        <li><p className="text-gray-700 text-lg leading-relaxed">Web Dev</p></li>
        <li><p className="text-gray-700 text-lg leading-relaxed">Machine Learning</p></li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
};

export default Skills;
