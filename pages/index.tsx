import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import Certification from '../components/Certification';
import EducationAndLanguage from '../components/EducationAndLanguage';
import Experience from '../components/Experience';
import Home from '../components/Home'
import Skills from '../components/Skills';

const index = () => {
  return (
    <>
      <Head>
        <title>Alkesh Jethava</title>
      </Head>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <EducationAndLanguage/>
      <Certification/>
    </>
  )
}

export default index;