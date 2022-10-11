import React from "react";
import { NextSeo } from "next-seo";

const PageLayout = ({ children, title, description, image }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description, image }}
      />
      <main className="">{children}</main>
    </>
  );
};

export default PageLayout;
