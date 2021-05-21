import React from "react";
import Stats from "./Stats";
import Profile from "./Profile";
import NextSteps from "./NextSteps";
import HonorableMeantions from "./HonorableMentions";

const ResultsPage = ({ nextSteps, marketProfile, marketSkills, stats }) => {
  return (
    <>
      <h1 className="text-4xl leading-10 font-extrabold text-gray-900 text-center">
        Your Top 3 Required Skills
      </h1>
      <h3 className="mt-4 text-xl leading-7 font-normal text-gray-500 text-center">
        According to your job market analysis, these are your top three required
        skills.
      </h3>
      <Stats stats={stats} />

      <div className="bg-gray-900 h-full w-full">
        <div className="lg:flex">
          <div className="mx-auto px-4 sm:px-6 py-16">
            <Profile marketProfile={marketProfile} />
            <HonorableMeantions marketSkills={marketSkills} />
          </div>

          <div className="md:flex-shrink-0 lg:w-2/4 w-full">
              <div className="block sm:absolute z-50 flex justify-center">
                <NextSteps steps={nextSteps} />
              </div>
              <img
                className="h-full w-full object-cover opacity-25 sm:block hidden"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                alt="People working on laptops"
              />
              <div aria-hidden="true" className="" />
          </div>
        </div>
        <div className="block sm:hidden h-12 bg-gray-900"></div>
      </div>
    </>
  );
};

export default ResultsPage;
