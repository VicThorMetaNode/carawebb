import React from "react";
import Head from "next/head";

//Import components
// import { Footer } from "./index";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title className="head-title">cara.dearone</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
