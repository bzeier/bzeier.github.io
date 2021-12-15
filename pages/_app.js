import '../styles/globals.css'
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3656376134294319"
          crossorigin="anonymous"></script>
      </Head>
      <meta name="description" content="What game engine does x use?"></meta>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
