import React from "react";
import Head from "next/head";

//Import components
// import { Footer } from "./index";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>cara.DEARONE - interior design</title>
        <meta name="title" content="cara.DEARONE - interior design" />
        <meta
          name="description"
          content="      We design the interior to bring new perspectives and an
                aesthetic look."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <!-- FACICON -->  */}
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* <!-- SEARCH CONSOLE Meta Tags -->  */}
        <meta
          name="google-site-verification"
          content="0hqcyJWnjl5Bvf2ASDyvvXEHOk5YXffxpsTIg9rcEzY"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://caradearone.com/" />
        <meta property="og:title" content="cara.DEARONE" />
        <meta
          property="og:description"
          content="      We design the interior to bring new perspectives and an
                aesthetic look."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://caradearone.com" />
        <meta property="twitter:title" content="cara.DEARONE" />
        <meta
          property="twitter:description"
          content="      We design the interior to bring new perspectives and an
                aesthetic look."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
