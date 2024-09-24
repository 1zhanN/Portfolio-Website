"use client";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import MissionSection from "@/components/MissionSection/MissionSection";

const Page = () => {
  const sectionRefs = useRef([]);
  const navbarHeight = 80; // Adjust this value based on the actual Navbar height

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sectionRefs.current = sections;

    let currentSectionIndex = 0;

    const handleScroll = (event) => {
      event.preventDefault();

      const direction = event.deltaY > 0 ? 1 : -1;
      const nextSectionIndex = currentSectionIndex + direction;

      if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
        currentSectionIndex = nextSectionIndex;

        // Scroll with an offset for the Navbar height
        window.scrollTo({
          top: sections[nextSectionIndex].offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    };

    const handleTouchStart = (event) => {
      // Store initial touch position
      const touchStartY = event.touches[0].clientY;

      const handleTouchMove = (moveEvent) => {
        const touchCurrentY = moveEvent.touches[0].clientY;
        const delta = touchStartY - touchCurrentY;

        if (Math.abs(delta) > 50) { // Adjust the threshold as needed
          handleScroll({ deltaY: delta });
          window.removeEventListener("touchmove", handleTouchMove);
        }
      };

      window.addEventListener("touchmove", handleTouchMove);
    };

    // Add wheel and touch event listeners
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <>
      <Navbar className="fixed top-0 left-0 right-0 z-50" /> {/* Fixed Navbar */}
      <main>
        <section className="min-h-screen flex justify-center items-center">
          <HeroSection />
        </section>
        <section className="min-h-screen flex justify-center items-center">
          <MissionSection />
        </section>
        <section className="min-h-screen flex justify-center items-center">
          <Experience />
        </section>
        <section className="min-h-screen flex justify-center items-center">
          <Skills />
        </section>
        <section className="min-h-screen flex justify-center items-center">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Page;
