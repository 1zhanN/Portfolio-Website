import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Link from "next/link";

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
            <Link
              href="/Frontend_Izhan_Nadeem.pdf" // Ensure this path is correct
              locale={false} // Disables locale routing
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl hover:scale-110"
              title="Download or View Resume"
            >
              <FaDownload className="text-xl sm:text-2xl hover:scale-110" />
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <Link
              href="/"
              className="view cursor-none border-transparent mx-4 sm:mx-6 text-sm sm:text-base"
            >
              About Me
            </Link>
            <Link
              href="/work"
              className="view cursor-none border-transparent mx-4 sm:mx-6 text-sm sm:text-base"
            >
              My Work
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
