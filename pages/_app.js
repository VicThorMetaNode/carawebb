// import { useEffect } from 'react'
// import { useRouter } from 'next/router'

//IMPORT GOOGLE ANALYTICS SETUP
// import * as ga from '../lib/google-analytics'
import Script from "next/script";

//IMPORT SASS /design
import "../scss/styles.scss";

//IMPORT CHAKRAUI LIBRARY
import { ChakraProvider } from "@chakra-ui/react";

//IMPORT INTERNAL LAYOUT SETUP
import Layout from "../components/Layout";

{/* <ChakraProvider>
        <Layout>
        <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      
        <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
      </Script>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider> */}

function MyApp({ Component, pageProps }) {

  return (
    <>
     
      <ChakraProvider>
        <Layout>
        <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;





