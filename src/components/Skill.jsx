import React from "react";

const Skill = ({ label }) => {
  return (
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white duration-200">
      {label}
    </div>
  );
};

export default Skill;
