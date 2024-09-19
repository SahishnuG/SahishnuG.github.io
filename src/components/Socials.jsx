import React from 'react';
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillDiscord
} from "react-icons/ai";

const Socials = () => {
  return (
    <section id="socials" className="mx-auto p-6 bg-gray-100 light:rounded-lg shadow-lg dark:bg-gray-800">
      <ul className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <li className='mx-auto'>
          <a
            href="https://in.linkedin.com/in/sahishnu-g-6a245230a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out flex items-center"
          >
            <AiFillLinkedin className='mr-2'/>
            Sahishnu G
          </a>
        </li>
        <li className='mx-auto'>
          <a
            href="https://www.instagram.com/gotnw_kira/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out flex items-center"
          >
            <AiFillInstagram className='mr-2'/>
            gotnw_kira
          </a>
        </li>
        <li className='mx-auto'>
          <a
            href="https://github.com/SahishnuG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out flex items-center"
          >
            <AiFillGithub className='mr-2'/>
            SahishnuG
          </a>
        </li>
        <li className='mx-auto'>
          <a
            href="https://discordapp.com/users/546324200177270784"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out flex items-center"
          >
            <AiFillDiscord className='mr-2'/>
            gotnw_kira
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Socials;