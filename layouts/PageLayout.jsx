import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto min-h-full max-w-prose px-4 pt-12 xl:px-0">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
