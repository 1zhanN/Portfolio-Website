import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="container mx-auto py-8 px-4">
      <div className="text-center mb-6">
        <p className="text-lg mb-2">
          <a href="#contact" className="view cursor-none text-2xl">
            Let's connect through GitHub or LinkedIn!
          </a>
        </p>
        <p className="text-sm text-gray-400">
          (Note: The email messaging feature is currently disabled.)
        </p>
      </div>
      <div className="w-full mx-auto p-4 rounded-lg">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              disabled // Disable the input field
              className="w-full p-3 bg-transparent text-gray-400 border-b-2 border-gray-600 cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              disabled // Disable the input field
              className="w-full p-3 bg-transparent text-gray-400 border-b-2 border-gray-600 cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              disabled // Disable the textarea
              className="w-full p-3 bg-transparent text-gray-400 border-b-2 border-gray-600 cursor-not-allowed"
            ></textarea>
          </div>

          <button
            type="button" // Change to button type to prevent submission
            className="w-full py-2 px-4 text-white bg-transparent cursor-not-allowed opacity-50"
            disabled // Disable the button
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex items-center justify-center space-x-4 mt-6">
        {/* Email icon */}
        <a
          href="mailto:izhann000@gmail.com"
          className="text-xl sm:text-2xl hover:scale-110"
        >
          <FaEnvelope />
        </a>
        {/* GitHub icon */}
        <a
          href="https://github.com/1zhanN"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl sm:text-2xl hover:scale-110"
        >
          <FaGithub />
        </a>
        {/* LinkedIn icon */}
        <a
          href="https://www.linkedin.com/in/izhan-nadeem/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl sm:text-2xl hover:scale-110"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;
