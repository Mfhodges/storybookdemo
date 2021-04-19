import React from "react";
import { ReactComponent as GooglIcon } from "../../assests/google.svg";

const Login = ({}) => {
    /**
     * AUTHENTICATION LOGIC GOES HERE
     */
  const triggerAuth = () => {
    // 3rd party auth login here
    console.log("triggered Auth");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="CodingfastlaneLogoFull.png"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          with your Google Account
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-sm text-center">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>

          <div className="mt-6">
            <div className="mt-6">
              <div>
                <a
                    onClick={triggerAuth}
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Google</span>
                  <GooglIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
