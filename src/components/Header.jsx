import React, { useEffect, useState } from 'react';
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

const Header = () => {
  // Determine the user's preferred theme on the first render
  const getInitialTheme = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      return true;  // dark mode
    } else {
      document.documentElement.classList.remove('dark');
      return false;  // light mode
    }
  };

  const [dark, setDark] = useState(getInitialTheme);

  const darkModeHandler = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');

    if (!dark) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
    }
  };

  // Apply the correct theme based on state whenever it changes
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4">
        {/* Heading */}
        <a href="#about" className="transition duration-500 ease-in-out hover:scale-110 flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
  <img src={process.env.PUBLIC_URL + '/sg.png'} className="rounded-lg h-12 mb-2 md:mb-0" alt="Logo" />
  <h1 className="flex items-center text-xl md:text-3xl lg:text-4xl font-bold">
    Hello,
    <p className="underline decoration-blue-500 decoration-double ml-2">I'm Sahishnu</p>
  </h1>
</a>


        {/* Navigation */}
        <nav>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center">
            <li>
              <button
                className="hover:text-blue-400 light:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
                onClick={darkModeHandler}
              >
                {dark ? <IoSunny /> : <IoMoon />}
              </button>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-400 light:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-400 light:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-blue-400 light:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-blue-400 light:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-400 light:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#socials"
                className="hover:text-blue-400 light:text-white dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
              >
                Socials
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
