import React from "react";

const Skills = () => {
  const skills = [
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Unity",
    "Unreal Engine",
    "Three.js",
    "Java",
    "GSAP",
    "Framer Motion",
    "ShadCN",
    "React Hooks",
  ];

  return (
    <section className="container mx-auto min-h-screen px-4 my-52">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={`#${skill.toLowerCase()}`} // You can customize the href as needed
            className="border rounded-lg px-4 py-2 text-lg font-medium view cursor-none"
          >
            {skill}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
