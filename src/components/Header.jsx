import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-0">Hello, I'm Sahishnu</h1>

        {/* Navigation */}
        <nav>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center">
            <li>
              <a
                href="#about"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#socials"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                Socials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
