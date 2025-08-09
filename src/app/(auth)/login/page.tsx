"use client";

import React, { useActionState } from "react";
import { login } from "./action";

const Login = () => {
  const [state, formAction, pending] = useActionState(login, {
    email: "",
    password: "",
  });
  console.log({ state });

  return (
    <React.Fragment>
      <main className="w-full h-screen flex justify-center items-center ">
        <div className="flex flex-1  items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Log In
            </h2>
            <form className="space-y-6" action={formAction}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <span className="text-base text-red-400 p-1">
                  {state.error && state.error}
                </span>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <span className="text-base text-red-400 p-1">
                  {state.error && state.error}
                </span>
              </div>
              <div>
                <button
                  disabled={pending}
                  type="submit"
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Login;
