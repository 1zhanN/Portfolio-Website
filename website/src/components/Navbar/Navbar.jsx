import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container flex items-center justify-center p-6 mx-auto capitalize">
          <a
            href="#"
            className="view cursor-none border-transparent mx-1.5 sm:mx-6"
          >
            About Me
          </a>

          <a
            href="#"
            className="view cursor-none border-transparent mx-1.5 sm:mx-6"
          >
            My Work
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
