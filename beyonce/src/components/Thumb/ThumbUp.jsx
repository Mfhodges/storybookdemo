import React, { useEffect, useState } from "react";
import { ReactComponent as ThumbUpIcon } from "../../assests/thumbUp.svg";
import { ReactComponent as ThumbUpIconSmall } from "../../assests/thumbUpSmall.svg";


/**
 *
 * @param {bool} isSelected - determines styling (icon color) of component
 * @param {bool} isSmall - determines styling (size) of component
 * @param {func} handleSelection - function to handle selecting/unselecting job
 * @returns
 */
const ThumbUp = ({ isSelected = false, isSmall = true, handleSelection }) => {
  const [isActive, setIsActive] = useState(isSelected);
  const handleClick = () => {
    console.log("clicking Icon");
    setIsActive(!isActive);
    //handleSelection() // CALL FUNCTION THAT ADDS/REMOVES JOB FROM LIST HERE!
  };

  const iconColor = isActive ? "text-gray-900" : "text-gray-400";
  const sizeBG = isSmall ? "w-6 h-6" : "w-9 h-9";
  return (
    <div
      className={`hover:bg-purple-100 ${sizeBG} flex justify-center items-center rounded-full ${iconColor}`}
      onClick={handleClick}
    >
    { isSmall ?  <ThumbUpIconSmall className="pb-px mb-px" /> : <ThumbUpIcon className="pb-0.5" /> }
   
    </div>
  );
};

export default ThumbUp;
