import React from 'react';
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

const Header = () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
    const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
      if (!dark === true){
        localStorage.theme = 'dark'
      }
      else{
        localStorage.theme = 'light'
      }
  }
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-0">Hello, I'm Sahishnu</h1>

        {/* Navigation */}
        <nav>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center">
            <li>
            <button className="text-white hover:text-blue-400 transition-colors duration-300" onClick={()=> darkModeHandler()}>
                {
                    
                    dark && <IoSunny />
                }
                {
                    !dark && <IoMoon />
                }
            </button>
            </li>
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
