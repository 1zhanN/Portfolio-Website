import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
} from "react-icons/fa";
import {
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import Image from "next/image";

const Work = () => {
  const projects = [
    {
      title: "Pokemon Explorer",
      description:
        "In this project, I'm developing a web application to fetch and display data from a Pokémon API. The goal is to create a responsive and efficient frontend that showcases Pokémon data with pagination functionality.",
      stack: [
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
      ],
      projectLink: "https://main--pokemonexplorerr.netlify.app/",
      sourceCodeLink: "https://github.com/1zhanN/pokemon-explorer",
    },
    {
      title: "3D Karachi City",
      description:
        "In this group project for Computer Graphics, I contributed to the creation of a 3D model of Karachi City using Three.js. I implemented procedural generation techniques to dynamically generate city features",
      stack: [
        {
          icon: <Image src="/images/Threejs-logo.svg" width={25} height={25} />,
          name: "Three.js",
        },
        { icon: <FaJsSquare />, name: "JavaScript" },
      ],
      projectLink:
        "https://umar-anzar.github.io/karachi-city-computer-graphics/KARACHI%20CITY%20PROJECT/index.html",
      sourceCodeLink:
        "https://github.com/1zhanN/Computer-Graphics?tab=readme-ov-file",
    },
    {
      title: "Sign-up Form",
      description: "does it really need a description?",
      stack: [
        { icon: <FaJsSquare />, name: "JavaScript" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
      ],
      projectLink: "https://react-hook-form-practice-five.vercel.app/",
      sourceCodeLink: "https://github.com/1zhanN/react-hook-form-practice",
    },
    {
      title: "Mio Programming Language",
      description: "Project of Compiler Construction",
      stack: [{ icon: <FaJava />, name: "Java" }],
      projectLink: "#",
      sourceCodeLink:
        "https://github.com/umar-anzar/Front-End-Compiler-Project",
    },
    {
      title: "Sprite Animation | Polygon Editor",
      description:
        "Here's a glimps of my personal work regarding Computer Graphics",
      stack: [
        {
          icon: <Image src="/images/Threejs-logo.svg" width={25} height={25} />,
          name: "Three.js",
        },
        { icon: <FaJsSquare />, name: "JavaScript" },
      ],
      projectLink: "#",
      sourceCodeLink:
        "https://github.com/1zhanN/Computer-Graphics/tree/main/MY%20WORK",
    },

    {
      title: "Todo List",
      description:
        "A minimalistic To-Do List app built with HTML, CSS, and JavaScript, featuring browser's local storage for saving tasks.",
      stack: [
        { icon: <FaJsSquare />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
      ],
      projectLink: "https://1zhann.github.io/To-do-App/",
      sourceCodeLink: "https://github.com/1zhanN/To-do-App?tab=readme-ov-file",
    },
    {
      title: "Weather Check",
      description:
        "This is a straightforward weather app crafted with HTML, CSS, and JavaScript. It provides up-to-date weather information for your location or any city you search for using the power of APIs.",
      stack: [
        { icon: <FaJsSquare />, name: "JavaScript" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
      ],
      projectLink: "https://1zhann.github.io/WeatherApp/",
      sourceCodeLink: "https://github.com/1zhanN/WeatherApp?tab=readme-ov-file",
    },
    {
      title: "Tomato",
      description:
        "A web-based (Frontend) platform that allows users to browse through various restaurants, view their menus, and place orders for delivery. It includes features such as user authentication, menu customization, order tracking, and payment processing.",
      stack: [
        { icon: <FaReact />, name: "React.js" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
      ],
      projectLink: "#",
      sourceCodeLink: "https://github.com/1zhanN/food-delivery",
    },
    {
      title: "Movie Land",
      description:
        "Welcome to Movie Land, a React project that fetches movie data from an API and displays it to users. With Movie Land, you can explore a vast collection of movies, search for specific titles, and discover new favorites.",
      stack: [
        { icon: <FaJsSquare />, name: "JavaScript" },
        { icon: <FaReact />, name: "React.js" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
      ],
      projectLink: "#",
      sourceCodeLink: "https://github.com/1zhanN/movie_land",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold text-left mb-12">My Work</h2>
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div key={index} className="text-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>

              <p className="text-base font-normal mb-4">Tech Stack:</p>
              <div className="flex space-x-4 sm:space-x-6 mb-6 text-xl sm:text-2xl">
                {project.stack.map((tech, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="view cursor-none">{tech.icon}</div>
                    <span className="text-xs sm:text-sm mt-1">{tech.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.projectLink}
                  className="view cursor-none text-white py-2 px-4 hover:scale-90"
                >
                  View Project
                </a>
                <a
                  href={project.sourceCodeLink}
                  className="view cursor-none text-white py-2 px-4 hover:scale-90"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Work;
