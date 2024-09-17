import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a");
    const cursorText = document.querySelector(".cursor-text");

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterLink = (event) => {
      const link = event.target;
      if (link.classList.contains("view")) {
        gsap.to(cursor, { scale: 4, backgroundColor: "#ffffff" }); // Scale and keep the cursor white for 'view' links
        cursorText.style.display = "block"; // Show the text on hover
      } else {
        gsap.to(cursor, { scale: 4 }); // Scale for other links without 'view'
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: "#ffffff" }); // Reset to white after leaving the link
      cursorText.style.display = "none"; // Hide the text when not hovering
    };

    document.addEventListener("mousemove", onMouseMove);
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    // Clean up the event listeners
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text">View</span>
    </div>
  );
};

export default Cursor;
