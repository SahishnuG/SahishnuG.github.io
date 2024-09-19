import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="mx-auto p-6 bg-gray-100 light:rounded-lg shadow-lg dark:bg-gray-800">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-6 dark:text-gray-100">Contact me</h2>
      <div className="dark:bg-gray-700 max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex md:items-center md:space-x-6">
      <form className="space-y-4 p-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="dark:bg-gray-500 dark:border-gray-900 dark:focus:ring-gray-300 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="dark:bg-gray-500 dark:border-gray-900 dark:focus:ring-gray-300 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="dark:bg-gray-500 dark:border-gray-900 dark:focus:ring-gray-300 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
        ></textarea>
        <button
          type="submit"
          className="dark:hover:bg-blue-200 dark:bg-blue-300 dark:text-black dark:focus:ring-gray-900 w-full px-4 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
      </div>
    </section>
  );
};

export default Contact;
