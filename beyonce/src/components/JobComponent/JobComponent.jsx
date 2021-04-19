import React from "react";
import ThumbUp from "../Thumb/ThumbUp";
import ThumbDown from "../Thumb/ThumbDown";

// This Component is used in the Job Modal and in the first 5 Jobs

/**
 *
 * @param {text} title - Job title
 * @param {text} children - Raw text of job description
 *
 */

const JobComponent = ({ job, children }) => {
  return (
    <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
      <div className="px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {job.title}
            </h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0 flex w-28 justify-between">
            <ThumbUp /> <ThumbDown />
          </div>
        </div>
      </div>
      <div className="px-4 py-5 sm:p-6">
      <div class="flex-1 flex bg-gray-100 overflow-hidden">
      <div class="px-6 py-4 flex-1 overflow-y-scroll">
            {children}</div>
            </div>
      </div>
    </div>
  );
};

export default JobComponent;

{
  /* <div className="rounded-lg text-center overflow-hidden shadow-xl transform transition-all">
    <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
      <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <ThumbUp/> <ThumbDown/>
        </div>
      </div>
    </div>
    </div> */
}
