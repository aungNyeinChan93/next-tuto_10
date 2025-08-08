import { notFound } from "next/navigation";
import React from "react";

interface TestDetailPorps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    [key: string]: string;
  }>;
}

const TestDetail: React.FC<TestDetailPorps> = async ({
  params,
  searchParams,
}) => {
  const { name } = await searchParams;
  const { id } = await params;

  if (Number(id) > 10) {
    notFound();
  }
  return (
    <React.Fragment>
      <main>
        Test Detail Page :{id} {name || "searchParams null"}
      </main>
    </React.Fragment>
  );
};

export default TestDetail;
