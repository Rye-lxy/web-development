import { Workbox } from "workbox-window";
import React, { useEffect } from "react";
import "../styles/globals.css";
import Navigator from "../components/navigator";

function App({ Component, pageProps }) {
  useEffect(() => {
    if (
      !("serviceWorker" in navigator) ||
      process.env.NODE_ENV !== "production"
    ) {
      console.warn("Pwa support is disabled");
      return;
    }
    const wb = new Workbox("sw.js", { scope: "/" });
    wb.register();
  }, []);
  return (
    <>
      <Navigator />
      <Component {...pageProps} />
    </>
  )
}

export default App
