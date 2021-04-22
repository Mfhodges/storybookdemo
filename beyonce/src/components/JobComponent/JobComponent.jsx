import React from "react";
import ThumbUp from "../Thumb/ThumbUp";
import ThumbDown from "../Thumb/ThumbDown";
import Badge from "../Badge/Badge";

// This Component is used in the Job Modal and in the first 5 Jobs

/**
 *
 * @param {object} job - Job object
 * @param {text} children - Raw text of job description
 *
 */

const JobComponent = ({ job, children }) => {
  return (
    <div className="bg-white shadow rounded-lg h-full">
      <div className="bg-white px-10 py-5 border-b border-gray-200">
        <div className="flex items-center justify-between flex-nowrap">
          <h3 className="text-3xl leading-6 font-medium text-gray-900">
            {job.title}
          </h3>
          <div className="ml-4 mt-2 flex-shrink-0 flex w-28 justify-between">
            <ThumbUp /> <ThumbDown />
          </div>
        </div>
        <div className="flex items-center justify-center sm:flex-nowrap sm:flex-row flex-col flex-wrap text-base text-gray-500">
          <span>{job.status}</span>{" "}
          <span className="hidden sm:px-4 sm:block text-gray-200">|</span>
          <div>
            {job.skills.map((skill) => (
              <Badge text={skill}></Badge>
            ))}
          </div>{" "}
          <span className="hidden sm:px-4 sm:block text-gray-200">|</span>
          <span>{job.location}</span>
        </div>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <div className="m-px flex h-4/6 max-h-96 border-2 border-gray-300 rounded-lg">
          <div className="px-6 py-4 overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default JobComponent;
