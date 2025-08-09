"use client";

import React, { useEffect } from "react";

interface MainErrorProps {
  error: Error;
  reset: () => void;
}

const RootError = ({ error, reset }: MainErrorProps) => {
  //   useEffect(() => {
  //     console.error(error.message);
  //   }, []);\
  console.log(error.message);

  return (
    <React.Fragment>
      <main className="w-full h-screen flex justify-center items-center">
        <div className="text-center">
          <h3 className="text-2xl p-2 text-center font-semibold text-red-500">
            Something Wrong!
          </h3>
          <button
            type="button"
            className=" underline underline-offset-8 decoration-indigo-600 "
            onClick={() => reset()}
          >
            Try Again
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default RootError;
