import React, { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import * as ga from "../lib/ga";
import Transition from "../components/Transition";

function App({ Component, pageProps, router }) {
  const url = `https://danhannigan.dev${router.route}`;

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <DefaultSeo
        titleTemplate="%s | Dan Hanigan"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url,
          description:
            "Personal website for Dan Hannigan, front end developer, designer, and community leader in Denver, Colorado.",
          site_name: "Dan Hannigan | danhannigan.dev",
        }}
        canonical={url}
        twitter={{
          handle: "@danhannigan",
        }}
      />
      <Transition>
        <Component {...pageProps} />
      </Transition>
      <Footer />
    </div>
  );
}

export default App;
