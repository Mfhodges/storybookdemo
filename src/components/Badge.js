import React from "react";

/**
 * Functional Component to display Tailwind Badge
 * @param {string} text - text label to display in the badge
 * @param {string} color - color family used to define the tailwind css classes
 */
const Badge = ({ text, color, onRemove, isRemovable = false, isSmall=true }) => {
  const badgePadding = isRemovable ? "px-2" : "px-3";
  const textStyling = isSmall ? 'text-xs' : 'text-sm';
  return (
    <button
      href="#"
      className={`bg-${color}-100 text-${color}-800 inline-block rounded-full font-medium text-xs mr-1 ${badgePadding} py-1`}
    >
      <span className={`align-middle ${textStyling}`}>{text}</span>
      {isRemovable && (
        <span
          onClick={onRemove}
          className={`inline-flex items-center align-middle justify-center w-4 h-4 ml-1 rounded-full text-${color}-400 hover:bg-${color}-200 hover:text-${color}-500`}
        >
          <svg
            className="w-2.5 h-2.5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      )}
    </button>
  );
};

export default Badge;
