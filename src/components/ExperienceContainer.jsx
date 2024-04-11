import React from "react";

const ExperienceContainer = () => {
  return (
    <div className="flex max-w-xs justify-between">
      <div className="mr-10 md:mr-20 space-y-4">
        <h2 className="bg-white p-3 font-semibold rounded-b-lg rounded-l-lg">
          Title
        </h2>
        <p className="text-sm">Description</p>
        <p className="text-sm italic">2024-Now</p>
        <p className="bg-white rounded p-1.5">Company</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white border-2 border-red-500 min-h-[24px] w-6 rounded-full" />
        <div className="bg-black h-full w-0.5 rounded-full" />
      </div>
    </div>
  );
};

export default ExperienceContainer;
