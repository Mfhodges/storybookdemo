import React from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

const LoadingPage = () => {
    const joke = "What's the worst thing about ancient history class? The teachers tend to Babylon."
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto w-8/12">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="p-8">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Grabbing all jobs within your market
            </h3>
            <div className="pt-6 text-sm text-gray-500">
              <p>
                This may take a few seconds so here's a Dad joke:
              </p>
              <p className="pt-6 pb-4 text-gray-700 text-center	italic">{joke}</p>
            </div>
          </div>
        </div>
        <div className="mt-24 flex items-center justify-center">
              <LoadingAnimation className="self-center" />
            </div>
      </div>
    </div>
  );
};

export default LoadingPage;

