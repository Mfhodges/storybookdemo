import React from "react";

const Profile = ({ marketProfile }) => {
  return (
    <>
      <p className="mt-3 text-3xl leading-9 font-extrabold text-white">
        Your Profile
      </p>
      <ul className="text-gray-300 mt-5 text-lg ">
        <li className="py-0.5">
          <span className="pr-2.5" role="img" aria-label="pushpin">
            📍
          </span>
          Location: {marketProfile.location}
          <b></b>
        </li>
        <li className="py-0.5">
          <span className="pr-2.5" role="img" aria-label="hammer and wrench">
            🛠
          </span>
          Skills selected: <b>{marketProfile.selectedSkills}</b>
        </li>
        <li className="py-0.5">
          <span className="pr-2.5" role="img" aria-label="money bag">
            💰
          </span>
          Predicted Salary: <b>{marketProfile.salary}</b>
        </li>
        <li className="py-0.5">
          <span className="pr-2.5" role="img" aria-label="briefcase">
            💼
          </span>
          Average Title: <b>{marketProfile.title}</b>
        </li>
      </ul>
    </>
  );
};

export default Profile;
