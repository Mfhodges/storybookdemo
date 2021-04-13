import React from 'react';


/**
 * Functional Component to display Tailwind Dropdown
 * @param {string} text - text label to display
 * @param {string} description - description of field. optional
 * @param {string} checkboxID - string to populate input id and label htmlfor
 */
const Checkbox = ({text, checkboxID, description=""}) => {

return (<div className="flex pb-4">
          <input id={checkboxID} name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"></input>
          <div >
          <label htmlFor={checkboxID} className="ml-2 -mt-0.5 block text-sm font-medium leading-5 text-gray-700">
            {text}
          </label>
          { description ? (<span className="ml-2 -mt-0.5 block text-sm font-normal leading-5 text-gray-500">Optional description here</span>) : null}
          </div>
        </div>)
};

export default Checkbox;