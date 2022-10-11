import React, { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import * as ga from "../lib/ga";
import Transition from "../components/Transition";
import { AnimatePresence } from "framer-motion";

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
      <DefaultSeo
        titleTemplate="%s | Dan Hannigan"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url,
          description:
            "Personal website for Dan Hannigan, front end developer, designer, and community leader in Denver, Colorado.",
          site_name: "Dan Hannigan | danhannigan.dev",
          images: [
            {
              url: "/images/danhannigan-og-image-2022.png",
              width: 800,
              height: 800,
              alt: "Dan Hannigan",
            },
          ],
        }}
        canonical={url}
        twitter={{
          handle: "@danhannigan",
          site: "@danhannigan",
          cardType: "summary_card",
        }}
      />
      <Header />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
