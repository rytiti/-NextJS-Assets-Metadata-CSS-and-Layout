import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title> My metadata app quest </title>
        <link rel="icon" href="/google.png" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}