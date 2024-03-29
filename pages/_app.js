import React, { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import PlausibleProvider from "next-plausible";

import * as ga from "../lib/ga";
import Transition from "../components/Transition";
import { AnimatePresence } from "framer-motion";

function App({ Component, pageProps, router }) {
  const url = `https://danhannigan.dev${router.asPath}`;

  return (
    <PlausibleProvider domain="danhannigan.dev">
      <div className="flex h-screen flex-col justify-between">
        <DefaultSeo
          titleTemplate="%s | Dan Hannigan"
          canonical={url}
          openGraph={{
            type: "website",
            locale: "en_US",
            url,
            description:
              "Personal website for Dan Hannigan, front end developer, designer, and community leader in Denver, Colorado.",
            site_name: "Dan Hannigan | danhannigan.dev",
          }}
          twitter={{
            handle: "@danhannigan",
            site: "@danhannigan",
            cardType: "summary",
          }}
        />
        <Header />
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} canonical={url} key={url} />
          <Analytics />
        </AnimatePresence>
        <Footer />
      </div>
    </PlausibleProvider>
  );
}

export default App;
