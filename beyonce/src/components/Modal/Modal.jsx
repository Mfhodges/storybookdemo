import React from "react";
import Button from "../Button/Button";
/**
 *
 * @param {string} title - text header
 * @param {string} description - text description
 * @param {string} buttonText - text to display in button
 * @param {func} handleAction - function to invoke on button click
 */

const Modal = ({ title, description, buttonText, handleAction }) => {
  return (
    <div
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="mt-3 text-center sm:mt-0 sm:ml-4">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  {title}{" "}
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">{description}</p>
                </div>
            </div>
          </div>
          <div class="px-4 py-4 sm:px-6">
            <Button isFullWidth onClick={handleAction}>
              {buttonText}{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
