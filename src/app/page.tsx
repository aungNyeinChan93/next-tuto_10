import Link from "next/link";
import React from "react";

const HomePage = async () => {
  return (
    <React.Fragment>
      <main className="container mx-auto p-4 ">
        Home
        <Link
          className="px-4 py-2 ms-2 rounded-2xl bg-green-500 "
          href={{
            pathname: "/tests",
          }}
          replace
          scroll={false}
        >
          Go to tests
        </Link>
        <Link
          className="px-4 py-2 ms-2 rounded-2xl bg-green-500 "
          href={{
            pathname: "/tests/10",
            query: {
              name: "chan",
            },
          }}
          replace
        >
          Go to Detail Test with query
        </Link>
        <Link
          className="px-4 py-2 ms-2 rounded-2xl bg-green-500 "
          href={{
            pathname: "/quotes",
          }}
          replace
        >
          Go to Quotes
        </Link>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
