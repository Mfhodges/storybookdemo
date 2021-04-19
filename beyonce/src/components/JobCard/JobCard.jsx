import React from "react";
import Badge from "../Badge/Badge";
import ThumbUp from "../Thumb/ThumbUp";
import ThumbDown from "../Thumb/ThumbDown";

const JobCard = ({ job }) => {
  const openModal = () => {
    /** CODE TO TRIGGER OPENING MODAL  */
    console.log("opening modal");
  };
  return (
    <li
      key={job.id}
      className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div
            className="flex flex-col items-center text-center cursor-pointer"
            onClick={openModal}
          >
            <div className="w-32 h-20 flex content-center">
              <img className="m-auto" src={job.imageURL} alt="" />
            </div>
            <h3 className="text-gray-900 mt-3 text-sm font-medium truncate ">
              {job.title}
            </h3>
            <p className="mt-1 text-gray-500 mt-1 text-sm truncate">
              {job.company}
            </p>
            <div className="flex flex-wrap justify-center mt-3 space-x-2 ">
              {job.skills.map((skill) => (
                <Badge text={skill.name} color={skill.color} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 py-2 flex-1 flex justify-around">
            <ThumbUp />
          </div>
          <div className="-ml-px w-0 py-2 flex-1 flex justify-around">
            <ThumbDown className="" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default JobCard;
