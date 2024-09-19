
import React from 'react';
import arenahub from '../arenahub.png';
import inknarrator from '../inknarrator.png';
import web from '../web.png'
import ml from '../ml.jpeg'
import c from '../c.jpg'
import python from '../python.webp'

const Projects = () => {
  return (
<section id="projects" className="md:h-screen w-screen justify-items-center mx-auto p-6 bg-gray-100 light:rounded-lg shadow-lg dark:bg-gray-800">
  <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8 dark:text-gray-100">Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 mx-auto">
    <a href="https://replit.com/@edaigrp9/ArenaHub" className="mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:dark:bg-gray-700 hover:ring-2 dark:hover:ring-gray-300 hover:ring-blue-500 transition duration-500 ease-in-out hover:scale-125 hover:my-6" target="_blank"
            rel="noopener noreferrer">
      <img src={arenahub} alt="ArenaHub" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="dark:text-gray-200 text-gray-700 text-lg font-semibold">ArenaHub</h3>
        <p className="dark:text-gray-300 text-gray-600">Sports Arena Booking website</p>
      </div>
    </a>

    <a href="https://replit.com/@gotnwkira/InkNarrator" className="mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:dark:bg-gray-700 hover:ring-2 dark:hover:ring-gray-300 hover:ring-blue-500 transition duration-500 ease-in-out hover:scale-125 hover:my-6" target="_blank"
            rel="noopener noreferrer">
      <img src={inknarrator} alt="InkNarrator" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="dark:text-gray-200 text-gray-700 text-lg font-semibold">InkNarrator</h3>
        <p className="dark:text-gray-300 text-gray-600">Story writer bot</p>
      </div>
    </a>

    <a href="https://replit.com/@gotnwkira/InkNarrator" className="mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:dark:bg-gray-700 hover:ring-2 dark:hover:ring-gray-300 hover:ring-blue-500 transition duration-500 ease-in-out hover:scale-125 hover:my-6" target="_blank"
            rel="noopener noreferrer">
      <img src={inknarrator} alt="InkNarrator" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="dark:text-gray-200 text-gray-700 text-lg font-semibold">InkNarrator</h3>
        <p className="dark:text-gray-300 text-gray-600">Story writer bot</p>
      </div>
    </a>

    <a href="https://replit.com/@gotnwkira/InkNarrator" className="mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:dark:bg-gray-700 hover:ring-2 dark:hover:ring-gray-300 hover:ring-blue-500 transition duration-500 ease-in-out hover:scale-125 hover:my-6" target="_blank"
            rel="noopener noreferrer">
      <img src={inknarrator} alt="InkNarrator" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="dark:text-gray-200 text-gray-700 text-lg font-semibold">InkNarrator</h3>
        <p className="dark:text-gray-300 text-gray-600">Story writer bot</p>
      </div>
    </a>
  </div>
  <section id="skills" className="transition duration-500 justify-items-center mx-auto pt-12">
  <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8 dark:text-gray-100">Skills</h2>
  <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6 mx-auto">
    {/* Machine Learning */}
    <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:dark:bg-gray-700 transition duration-500 ease-in-out hover:scale-110">
      <img src={ml} alt="ArenaHub" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="dark:text-gray-200 text-gray-700 text-lg font-semibold text-center">Machine Learning</h3>
      </div>
    </div>

    {/* Web Development */}
    <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:dark:bg-gray-700 transition duration-500 ease-in-out hover:scale-110">
      <img src={web} alt="InkNarrator" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="dark:text-gray-200 text-gray-700 text-lg font-semibold text-center">Web Development</h3>
      </div>
    </div>

    {/* Python */}
    <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:dark:bg-gray-700 transition duration-500 ease-in-out hover:scale-110">
      <img src={python} alt="InkNarrator" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="dark:text-gray-200 text-gray-700 text-lg font-semibold text-center">Python</h3>
      </div>
    </div>

    {/* C */}
    <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:dark:bg-gray-700 transition duration-500 ease-in-out hover:scale-110">
      <img src={c} alt="InkNarrator" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="dark:text-gray-200 text-gray-700 text-lg font-semibold text-center">C</h3>
      </div>
    </div>
  </div>
  </section>
</section>

  );
};

export default Projects;
