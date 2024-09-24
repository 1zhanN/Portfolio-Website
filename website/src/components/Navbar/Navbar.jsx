import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container flex items-center justify-between p-4 mx-auto capitalize">
          <div className="flex items-center space-x-6">
            <a
              href="mailto:your.email@example.com"
              className="text-xl sm:text-2xl hover:scale-110"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/izhan-nadeem/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="flex items-center justify-end">
            <a
              href="/"
              className="view cursor-none border-transparent mx-4 sm:mx-6 text-sm sm:text-base"
            >
              About Me
            </a>
            <a
              href="/work"
              className="view cursor-none border-transparent mx-4 sm:mx-6 text-sm sm:text-base"
            >
              My Work
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
