import React from 'react';

const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">About Me</h2>
      
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex md:items-center md:space-x-6">
        {/* Image Section */}
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="/image.jpg"
            alt="My image"
          />
        </div>
        
        {/* Text Section */}
        <div className="p-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            Hello! I'm a second-year student at VIT Pune, currently involved in the IEEE student club. 
            I'm passionate about technology, and I enjoy working on projects that challenge my skills 
            and creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
