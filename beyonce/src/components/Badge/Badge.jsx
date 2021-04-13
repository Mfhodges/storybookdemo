import React from 'react';
import { ReactComponent as RemoveIcon } from '../../assests/remove.svg';
//import RemoveIcon from '../../assests/remove.svg';

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
  const badgePadding = isRemovable ? 'px-2' : 'px-3';
  const textStyling = isSmall ? 'text-xs' : 'text-sm';
  return (
    <button
      href="#"
      className={`bg-${color}-100 text-${color}-800 inline-block rounded-full font-medium text-xs ${badgePadding} py-1`}
    >
      <span className={`align-middle ${textStyling}`}>{text}</span>
      {isRemovable && (
        <span
          onClick={onRemove}
          className={`inline-flex cursor-pointer items-center align-middle justify-center w-4 h-4 ml-1 rounded-full text-${color}-400 hover:bg-${color}-200 hover:text-${color}-500`}
        >
         <RemoveIcon />
        </span>
      )}
    </button>
  );
};

export default Badge;