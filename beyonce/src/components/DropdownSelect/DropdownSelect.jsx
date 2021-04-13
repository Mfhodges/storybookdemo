import React, { useState } from 'react';

/**
 * Functional Component to display Tailwind Dropdown
 * @param {string} label - text label to display
 * @param {array} values - array of objects with value and name attributes.
 * @param {string} placeholder - placeholder text for the select input. optional and defaults to "".
 */
const DropdownSelect = ({ label, values, placeholder = '' }) => {
  const [selected, setSelected] = useState();
  const labelID = `${label.toLowerCase().replace(' ', '_')}-label`;

  const handleSelect = (event) => {
    setSelected(event.target.value);
  };
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
          <option hidden>{placeholder}</option>
          {values.map((item) => (
            <option value={item.value} key={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DropdownSelect;