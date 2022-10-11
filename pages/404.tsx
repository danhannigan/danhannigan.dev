import React from "react";
import PageLayout from "../components/PageLayout";
import Link from "next/link";

const NotFound = () => {
  return (
    <PageLayout
      title="404 - Error"
      description="Uh oh, something went wrong"
      image=""
    >
      <Link href="/" scroll={false}>
        <div className="flex flex-col justify-center py-40 text-center align-middle text-9xl blur-md transition-all duration-300 ease-in-out hover:cursor-pointer hover:blur-none">
          <div>404</div>
          <span className="block text-2xl text-accent">
            Not found - head home?
          </span>
        </div>
      </Link>
    </PageLayout>
  );
};

export default NotFound;
