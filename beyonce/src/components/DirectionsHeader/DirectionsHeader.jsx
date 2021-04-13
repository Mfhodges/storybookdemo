import React from "react";
import Button from '../Button/Button';

const DirectionsHeader = ({isFinal=false}) => {
    const Stat = (<div className="ml-3 flex flex-col">
    <span className="text-2xl leading-9 font-extrabold text-indigo-600">1</span>
    <span className="text-sm leading-6 font-normal text-gray-500">Remaining</span>
    </div>)


  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-5 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Applicant Information
        </h3>
        <div className="flex flex-nowrap">
          <p className="mt-2 pr-6 text-sm leading-5 font-normal text-gray-500 flex-initial">
            Personal details and application.Personal details and
            application.Personal details and application.Personal details and
            application.Personal details and application.Personal details and
            application.Personal details and application.Personal details and
            application.
          </p>
          <div className="flex-shrink-0 flex items-end">
              {isFinal? <Button>Next Step!</Button> : Stat }
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200"></div>
    </div>
  );
};
export default DirectionsHeader;
