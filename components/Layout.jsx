import React from "react";
import Head from "next/head";

//Import components
// import { Footer } from "./index";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <meta charset="UTF-8" />
        <title>cara.DEARONE - interior design</title>
        <meta
          name="keywords"
          content="Interior design, Interior, Home interior, Designer, Interior decoration, Home staging, Commercial events, House decorator,Home decor, Interior design ideas, Paint living room, Interior architect"
        />
        <meta name="title" content="cara.DEARONE - interior design" />
        <meta
          name="description"
          content="We guide you to design the ideal interior that reflects your way of living, by adapting perfectly to you and your needs.Selling your place?  We clean, decorate, rearrange furniture to present your home in the best possible way. Let’s build that homey feeling together."
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
          content="We guide you to design the ideal interior that reflects your way of living, by adapting perfectly to you and your needs.

Selling your place?  We clean, decorate, rearrange furniture to present your home in the best possible way. Let’s build that homey feeling together."
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
          content="We guide you to design the ideal interior that reflects your way of living, by adapting perfectly to you and your needs.

Selling your place?  We clean, decorate, rearrange furniture to present your home in the best possible way. Let’s build that homey feeling together."
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
