import React from 'react';

const Socials = () => {
  return (
    <section id="socials" className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">My Socials</h2>
      <ul className="flex flex-col items-center space-y-4">
        <li>
          <a
            href="https://in.linkedin.com/in/sahishnu-g-6a245230a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/gotnw_kira/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://github.com/SahishnuG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
          >
            Github
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Socials;