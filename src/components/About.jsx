import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="container">
      <h2>About Me</h2>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
      <div class="md:shrink-0 items-center">
      <img class="justify-center h-48 w-full object-cover md:h-full md:w-48" src="/image.jpg" alt="My image" />
      </div></div></div>
      <p>Hello! I'm a second-year student at VIT Pune, currently involved in the IEEE student club. I'm passionate about technology, and I enjoy working on projects that challenge my skills and creativity.</p>
    </section>
  );
};

export default About;
