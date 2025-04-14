
import React from 'react';

import arenahub from '../arenahub.png';
import inknarrator from '../inknarrator.png';
import solvex from '../solvex.png'
import agentplay from '../agentplay.png'

import web from '../web.png'
import ml from '../ml.jpeg'
import genai from '../genai.png'
import sql from '../sql.png'

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

    <a href="https://github.com/SahishnuG/InkNarrator" className="mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:dark:bg-gray-700 hover:ring-2 dark:hover:ring-gray-300 hover:ring-blue-500 transition duration-500 ease-in-out hover:scale-125 hover:my-6" target="_blank"
            rel="noopener noreferrer">
      <img src={inknarrator} alt="InkNarrator" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="dark:text-gray-200 text-gray-700 text-lg font-semibold">InkNarrator</h3>
        <p className="dark:text-gray-300 text-gray-600">Story writer bot</p>
      </div>
    </a>

    <a href="https://github.com/SahishnuG/Solvex_codesmith" className="mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:dark:bg-gray-700 hover:ring-2 dark:hover:ring-gray-300 hover:ring-blue-500 transition duration-500 ease-in-out hover:scale-125 hover:my-6" target="_blank"
            rel="noopener noreferrer">
      <img src={solvex} alt="Log analyser" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="dark:text-gray-200 text-gray-700 text-lg font-semibold">Log Analysis API</h3>
        <p className="dark:text-gray-300 text-gray-600">Async real time log analyser using Agentic AI and RAG</p>
      </div>
    </a>

    <a href="https://github.com/IEEE-SB-VIT-Pune/agentPlay" className="mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:dark:bg-gray-700 hover:ring-2 dark:hover:ring-gray-300 hover:ring-blue-500 transition duration-500 ease-in-out hover:scale-125 hover:my-6" target="_blank"
            rel="noopener noreferrer">
      <img src={agentplay} alt="InkNarrator" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="dark:text-gray-200 text-gray-700 text-lg font-semibold">AgentPlay</h3>
        <p className="dark:text-gray-300 text-gray-600">Chrome extension that enhances YouTube videos with AI voice translation, summarization, notes generation, and RAG Q&A features.</p>
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

    {/* SQL */}
    <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:dark:bg-gray-700 transition duration-500 ease-in-out hover:scale-110">
      <img src={sql} alt="InkNarrator" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="dark:text-gray-200 text-gray-700 text-lg font-semibold text-center">SQL</h3>
      </div>
    </div>

    {/* GenAI */}
    <div className="mx-auto bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:dark:bg-gray-700 transition duration-500 ease-in-out hover:scale-110">
      <img src={genai} alt="InkNarrator" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="dark:text-gray-200 text-gray-700 text-lg font-semibold text-center">GenAI</h3>
      </div>
    </div>
  </div>
  </section>
</section>

  );
};

export default Projects;
