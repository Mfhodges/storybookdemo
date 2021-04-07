import React, { useState } from "react";





/**
 * Functional Component to display Tailwind Dropdown
 * @param {string} label - text label to display 
 * @param {array} values - 
 */
const Dropdown = ({ label, values}) => {
  const [selected, setSelected] = useState();
  const labelID = label.toLowerCase().replace(" ", "_") + "-label";

  const handleSelect = (event) => {
    setSelected(event.target.value);
  }
  return (
    <>
      <label id={labelID} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <select
          className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          aria-expanded="true"
          onChange={handleSelect}
        >
          <option value="" >--Please choose an option--</option>
        {values.map((item) =>
          <option value={item.value} key={item.value}>{item.name}</option>
        )}
          
        </select>
      </div>
    </>
  );
};

export default Dropdown;

/**
 *       <span class="flex items-center">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="flex-shrink-0 h-6 w-6 rounded-full"></img>
        <span class="ml-3 block truncate">
          Tom Cook
        </span>
      </span>
      <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        
        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </span>
 * 
 */
