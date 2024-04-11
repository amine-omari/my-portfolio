import ExperienceContainer from "@/components/ExperienceContainer";
import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col space-y-12 justify-center">
      {/* Experience Title */}
      <h2 className="font-bold text-2xl">EXPERIENCE</h2>
      {/* Experience List */}
      <div>
        {/* Experience List Item */}
        <div>
          {/* LEFT */}
          <ExperienceContainer />
        </div>
        {/* CENTER */}
        {/* RIGHT */}
      </div>
    </div>
  );
};

export default Experience;
