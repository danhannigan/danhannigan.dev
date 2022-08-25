import React from "react";
import { NextSeo } from "next-seo";

const PageLayout = ({ children, title, description }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <main className="">{children}</main>
    </>
  );
};

export default PageLayout;
