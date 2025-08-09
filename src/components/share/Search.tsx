"use client";

import React, { useActionState } from "react";
import Form from "next/form";
import { searchAction } from "@/actions/actions";

const Search = () => {
  const [state, formAction, isPending] = useActionState(searchAction, {
    search: "123",
  });
  return (
    <React.Fragment>
      <main>
        <Form
          action={formAction}
          className=" flex gap-5 justify-center items-center "
        >
          <div>
            <input
              className="p-3  border-2 border-slate-500 mx-4 rounded-2xl"
              type="text"
              name="search"
              placeholder="Enter search!"
            />
          </div>
          <div className="text-base text-red-600 p-2 ">
            {state?.error && state.error}
          </div>
          <div>
            <button
              className="px-3 py-2 bg-indigo-400 text-black rounded-2xl"
              disabled={isPending}
              type="submit"
            >
              Search
            </button>
          </div>
        </Form>
      </main>
    </React.Fragment>
  );
};

export default Search;
