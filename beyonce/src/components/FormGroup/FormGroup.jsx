import React from "react";

const FormGroup = ({ title, description = "", children }) => {
  return (
    <>
      <h2 className="pb-4 text-lg leading-6 font-medium text-gray-900">
        {title}
      </h2>
      {description ? (
        <h3 className="pb-4 text-base font-medium leading-6 text-gray-700">
          {description}
        </h3>
      ) : null}
      {children}
    </>
  );
};

export default FormGroup;