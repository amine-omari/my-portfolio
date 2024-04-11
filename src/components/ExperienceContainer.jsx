import React from "react";

const ExperienceContainer = () => {
  return (
    <div className="flex max-w-xs justify-between">
      <div className="mr-10 md:mr-20">
        <h2>Title</h2>
        <p>Description</p>
        <time>2024-Now</time>
        <p>Company</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white border-2 border-red-500 min-h-[24px] w-6 rounded-full" />
        <div className="bg-black h-full w-0.5 rounded-full" />
      </div>
    </div>
  );
};

export default ExperienceContainer;
