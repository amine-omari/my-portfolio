import Skill from "@/components/Skill";
import React from "react";

const Skills = () => {
  const SKILLS = [
    {
      id: 0,
      label: "HTML",
    },
    {
      id: 1,
      label: "CSS",
    },
    {
      id: 2,
      label: "TailwindCss",
    },
    {
      id: 3,
      label: "Javascript",
    },
    {
      id: 4,
      label: "Typescript",
    },
    {
      id: 5,
      label: "Next.js",
    },
    {
      id: 6,
      label: "React.js",
    },
    {
      id: 7,
      label: "Framer Motion",
    },
    {
      id: 8,
      label: "Gsap",
    },
  ];

  return (
    <div className="flex flex-col space-y-12 justify-center">
      {/* Skills Title */}
      <h1 className="font-bold text-2xl">SKILLS</h1>

      {/* Skills List*/}
      <div className="flex flex-wrap max-w-sm gap-2">
        {SKILLS.map(({ id, label }) => (
          <Skill key={id} label={label} />
        ))}
      </div>

      {/* Scroll Icon SVG */}
      <div>
        <button className="hover:scale-110 hover:text-[#EBB361] duration-200">
          <CircleArrow />
        </button>
      </div>
    </div>
  );
};

export default Skills;
