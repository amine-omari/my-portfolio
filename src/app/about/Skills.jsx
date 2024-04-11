import React from "react";

const Skills = () => {
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
