import React from 'react';

const Footer = () => {
  return (
    <footer className='w-screen bg-gray-100 light:rounded-lg shadow-lg dark:bg-gray-800'>
      <div className="container mx-auto flex items-center space-x-4 p-6">
      <img src={process.env.PUBLIC_URL + '/sg.png'} className='rounded-lg h-12' />
      <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300"> Thanks for visiting!</p>
      </div>
    </footer>
  );
};

export default Footer;
