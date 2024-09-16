import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="max-w-md mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Contact</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
