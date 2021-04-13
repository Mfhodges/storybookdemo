import React from 'react';


/**
 * Functional Component to display Tailwind Dropdown
 * @param {string} text - text label to display
 * @param {bool} isFullWidth - boolean to determine if width stretches to container
 */
const Button = ({text, isFullWidth=false}) => {
if (isFullWidth) {
    return (
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign in
          </button>
    )
}
return (<button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full">New Project</button>)
};

export default Button;