import Loader from "@/components/share/Loader";
import Quotes from "@/components/share/Quote";
import React, { Suspense } from "react";

const QuotePage = async () => {
  return (
    <React.Fragment>
      <main>
        <Suspense fallback={<Loader />}>
          <Quotes />
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default QuotePage;
