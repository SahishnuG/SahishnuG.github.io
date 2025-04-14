import React from 'react';

const About = () => {
  return (
    <section id="about" className="dark:bg-dark-pattern transition duration-500 h-screen w-screen mx-auto pb-6 light:rounded-lg shadow-lg bg-light-pattern"
    >
      <hr class="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8 dark:text-gray-100">About Me</h2>
      
        {/* Image Section */}
        <div className="relative shadow-lg m-auto bg-gradient-to-b from-transparent dark:to-gray-800 to-gray-100 rounded-full w-80 h-80 transition duration-500 ease-in-out hover:scale-110">
          <img
            className="rounded-full object-scale-down mx-auto"
            src={process.env.PUBLIC_URL + '/image.png'}
            alt="My image"
          />
        </div>
        
        {/* Text Section */}
        <div className="p-6">
          <p className="text-gray-600 text-lg leading-relaxed dark:text-gray-300">
            I'm a CS(AIML) student at VIT Pune, who is passionate about technology.
            I enjoy working on projects that challenge my skills and creativity.
            I draw and play the guitar and piano in my free time. I also have an interest in literature.
          </p>
        </div>
    </section>
  );
};

export default About;
