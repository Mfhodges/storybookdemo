import React from 'react';
//import { ReactComponent as RemoveIcon } from '../assests/icons/remove.svg';

// <RemoveIcon />

/**
 * Functional Component to display Tailwind Badge
 * @param {string} text - text label to display in the badge
 * @param {string} color - color family used to define the tailwind css classes
 */
const Badge = ({
  text,
  color = 'gray',
  onRemove,
  isRemovable = false,
  isSmall = true,
}) => {
  return (
    <span
      className={`bg-${color}-100 text-${color}-800 inline-flex text-xs leading-5 font-semibold rounded-full $px-2`}
    >{text}
      {isRemovable && (
        <span
          onClick={onRemove}
          className={`inline-flex cursor-pointer items-center align-middle justify-center w-4 min-h-full ml-1 my-0.5 rounded-full text-${color}-400 hover:bg-${color}-200 hover:text-${color}-500`}
        >
         x
        </span>
      )}
    </span>
  );
};

export default Badge;