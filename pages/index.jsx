import Head from 'next/head';
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Footer from '../components/Footer'

const index = () => {
  return (
    <>
      <Head>
        <title>Alkesh Jethava | Resume</title>
      </Head>
      <main>
        <Navbar/>
        <Home/>
        <Footer/>
      </main>
    </>
  )
}

export default index;