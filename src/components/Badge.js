import React from "react";

////Users/maddyhodges/Desktop/CCFLStorybook/relay-component-library/src/assests/icons/remove.svg
/**
 * Functional Component to display Tailwind Badge
 * @param {string} text - text label to display in the badge
 * @param {string} color - color family used to define the tailwind css classes
 */
const Badge = ({ text, color, onRemove }) => {
  return (
    <button
      href="#"
      className={`bg-${color}-100 text-${color}-800 inline-block rounded-full font-medium text-xs mr-1 pl-3 pr-2 py-1`}
    >
    <span>
      {text}
      </span>
      <span
        onClick={onRemove}
        className={`inline-flex items-center justify-center w-4 h-4 ml-2 rounded-full text-${color}-400 hover:bg-${color}-200 hover:text-${color}-500`}
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
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </button>
  );
};

export default Badge;
