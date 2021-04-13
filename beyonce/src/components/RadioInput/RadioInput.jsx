import React from "react";

/**
 * 
 * @param {string} text - main text for input
 * @param {string} value - value attribute for element 
 * @param {string} name -  name attribute for element. A radio group is defined by giving each of radio buttons in the group the same name
 * @param {string} radioID - string to populate input id attribute and label htmlfor attribute
 * 
 */
const RadioInput = ({ text, value, name,radioID }) => (
  <div className="flex pb-4">
    <input type="radio" className="text-indigo-600 focus:ring-indigo-500" id={radioID} name={name} value={value}></input>
    <label for={radioID} className="ml-2 -mt-0.5 block text-sm font-medium leading-5 text-gray-700" >{text}</label>
    </div>
);


export default RadioInput;
