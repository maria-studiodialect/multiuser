import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/xxm0wcs.css"/>
    </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
