import { useEffect } from 'react'
import { useRouter } from 'next/router'

//IMPORT GOOGLE ANALYTICS SETUP
import * as ga from '../lib/google-analytics'

//IMPORT SASS /design
import "../scss/styles.scss"   

//IMPORT CHAKRAUI LIBRARY
import { ChakraProvider } from '@chakra-ui/react'

//IMPORT INTERNAL LAYOUT SETUP
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
  <ChakraProvider>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </ChakraProvider>
  )
}

export default MyApp
