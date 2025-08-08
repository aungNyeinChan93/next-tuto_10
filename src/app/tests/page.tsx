"use client";
import { useRouter } from "next/navigation";
import React from "react";

const TestsPage = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-gradient-to-tl from-indigo-950 via-slate-700/90 to-indigo-950 text-white ">
        <div className="container mx-auto flex justify-center items-center h-[5000px]">
          <button
            className="px-4 py-2 rounded-md bg-gray-400 text-black"
            type="button"
            onClick={() => router.replace("/", { scroll: false })}
          >
            Go to Home
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default TestsPage;
