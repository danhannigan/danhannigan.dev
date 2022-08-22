import React, { useEffect } from "react";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import * as ga from "../lib/ga";
import Transition from "../components/Transition";

function App({ Component, pageProps, router }) {
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
      <Transition>
        <Component {...pageProps} />
      </Transition>
      <Footer />
    </div>
  );
}

export default App;
