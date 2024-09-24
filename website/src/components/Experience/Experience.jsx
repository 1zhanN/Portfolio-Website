import React from "react";

const experiences = [
  {
    title: "Jr. Frontend Developer",
    company: "SeedInov",
    dates: "Apr 2024 - Jun 2024",
    location: "Karachi, Sindh, Pakistan",
    description:
      "Collaborate with UX/UI designers and backend developers. Design and develop user interfaces. Implement high-fidelity designs. Debug and troubleshoot frontend issues.",
    skills: [
      "Front-End Development",
      "Bootstrap (Framework)",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Game Designer",
    company: "Mindstorm Studios",
    dates: "Jun 2022 - Jun 2023",
    location: "Karachi, Sindh, Pakistan",
    description:
      "During my apprenticeship at MINDSTORM, I had the privilege of immersing myself in a rich learning experience. Collaborating closely with my talented colleagues, I not only learned valuable skills but also actively contributed to the development of award-winning games.",
    skills: ["Video Games", "Game Development", "Unity", "C#", "Python"],
  },
];

const Experience = () => {
  return (
    <section className="container px-4 py-8 md:py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl mb-2">
          <a className="text-4xl md:text-6xl view">Experiences </a> I've dived
          into
        </h2>
        <p className="text-base md:text-xl">
          Here is a summary of my professional experience, highlighting the
          roles I've held and the skills I've developed over time.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start gap-6"
          >
            {/* Experience Details */}
            <div className="flex-1 rounded-lg p-6 shadow-lg rounded-lg p-4">
              <h3 className="text-xl md:text-2xl mb-1">{experience.title}</h3>
              <p className="text-base md:text-lg mb-1">{experience.company}</p>
              <p className="text-sm md:text-base ">{experience.description}</p>
            </div>
            {/* Dates/Duration */}
            <div className="text-right ">
              <p className="text-base md:text-lg">{experience.dates}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
